// Workaround for NeoBackports 1.2.0 (bundled in selling_bin 1.4.3) never syncing data maps
// to clients of a dedicated server: its own sync only runs for connections that sent
// KnownRegistryDataMapsReplyPayload, and nothing ever sends that packet.
// This sends the same RegistryDataMapSyncPayload ourselves on join and on /reload.
// Only needed on the server. Remove once NeoBackports fixes the sync upstream.

const $DataMapsManager = Java.loadClass('net.nikdo53.neobackports.datamaps.DataMapsManager')
const $RegistryDataMapSyncPayload = Java.loadClass('net.nikdo53.neobackports.io.networking.RegistryDataMapSyncPayload')
const $NBNetworking = Java.loadClass('net.nikdo53.neobackports.io.networking.NBNetworking')
const $HashMap = Java.loadClass('java.util.HashMap')
const $ArrayList = Java.loadClass('java.util.ArrayList')

ForgeEvents.onEvent('net.minecraftforge.event.OnDatapackSyncEvent', event => {
  try {
    let playerList = event.getPlayerList()
    let server = playerList.getServer()
    let registryAccess = server.registryAccess()

    // A join syncs one player; /reload passes no player and syncs everyone.
    let targets = new $ArrayList()
    if (event.getPlayer() != null) {
      targets.add(event.getPlayer())
    } else {
      targets.addAll(playerList.getPlayers())
    }

    // NeoBackports hands out unmodifiable maps. Rhino cannot call methods on those JDK-internal
    // classes (IllegalAccessException on newer Java), so copy into HashMap/ArrayList first.
    let registries = new $HashMap($DataMapsManager.getDataMaps())
    let registryKeys = new $ArrayList(registries.keySet())
    for (let r = 0; r < registryKeys.size(); r++) {
      let registryKey = registryKeys.get(r)
      let registry = registryAccess.registry(registryKey)
      if (!registry.isPresent()) continue

      // The client clears every data map of the registry before applying the payload,
      // so all synced maps of a registry have to go in one payload.
      let dataMaps = new $HashMap()
      let types = new $HashMap(registries.get(registryKey))
      let typeIds = new $ArrayList(types.keySet())
      for (let t = 0; t < typeIds.size(); t++) {
        let type = types.get(typeIds.get(t))
        if (type.networkCodec() == null) continue
        dataMaps.put(typeIds.get(t), registry.get().getDataMap(type))
      }
      if (dataMaps.isEmpty()) continue

      for (let i = 0; i < targets.size(); i++) {
        let player = targets.get(i)
        // The host of a single player / LAN world shares the server's registries.
        if (server.isSingleplayerOwner(player.getGameProfile())) continue
        $NBNetworking.sendToPlayer(player, new $RegistryDataMapSyncPayload(registryKey, dataMaps))
      }
    }
  } catch (e) {
    console.error('selling_bin_sync_fix: failed to sync data maps: ' + e)
  }
})