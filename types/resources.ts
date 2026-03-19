import type { FirmwareResource } from './api';

// Remove the OfflineHardwareList since it's now in /public/data/hardware-list.json

const currentPrereleaseId = '2.7.21.3a14be7';

export const showPrerelease = false;

export const currentPrerelease = <FirmwareResource>{
  id: `v${currentPrereleaseId}`,
  title: `Meshtastic Fork Firmware ${currentPrereleaseId}`,
  zip_url: `https://github.com/meshtastic/firmware/releases/download/v${currentPrereleaseId}/firmware-${currentPrereleaseId}.zip`,
};

// Fork Configuration
// Set the GitHub repo that hosts your fork firmware
export const forkConfig = {
  enabled: true,
  name: 'MeshControl Fork',
  description: 'Meshtastic firmware fork with MeshControl, relay_node support, and HOP_MAX=64',
  firmwareRepo: 'https://raw.githubusercontent.com/meshtastic/meshtastic.github.io/master',
  githubRepo: 'https://github.com/meshtastic/firmware',
  releaseNotes: `
## Meshtastic Fork Firmware Features

### MeshControl (Port 78)
Remote configuration of mesh nodes via signed HMAC packets.

### Relay Node Support
- **Broadcast relay_node**: Set which node should rebroadcast your broadcasts first
- **DM relay_node preference**: Configure a default relay node for direct messages

### Hop Limit
- Changed HOP_MAX from 127 to 64

### Configuration
Use the iOS app or CLI to configure these features.
  `,
};

// Event Mode Configuration
// Set enabled to true to lock the flasher to a specific firmware for events
export interface EventModeConfig {
  enabled: boolean;
  eventName: string;
  eventTag: string;
  firmware: FirmwareResource;
}

const eventFirmwareId = '2.7.21.3a14be7';

const eventReleaseNotes = `
## Meshtastic Fork Firmware

This firmware includes MeshControl and relay_node features.

### Features
- MeshControl: Remote configuration via signed packets
- Relay Node: Specify which node rebroadcasts your messages
- HOP_MAX=64: Reduced hop limit

### Backup Note
If your device has existing settings, backup your keys before flashing.
`;

export const eventMode: EventModeConfig = {
  enabled: false,
  eventName: 'MeshControl Fork',
  eventTag: 'Fork',
  firmware: {
    id: `v${eventFirmwareId}`,
    title: `Meshtastic Fork ${eventFirmwareId}`,
    zip_url: `https://github.com/meshtastic/meshtastic.github.io/raw/master/firmware-${eventFirmwareId}.zip`,
    release_notes: eventReleaseNotes,
  },
};

export const vendorCobrandingTag = "";
export const supportedVendorDeviceTags = ["RAK", "B&Q", "LilyGo", "Seeed", "Heltec", "DIY", "Elecrow", "M5Stack", "NomadStar", "muzi"];
