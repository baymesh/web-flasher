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
  name: 'Baymesh Firmware',
  description: 'Custom Meshtastic fork with MeshControl, relay_node, HOP_MAX=64, position broadcast off, and channel slot 49',
  firmwareRepo: 'https://raw.githubusercontent.com/baymesh/bayme.sh-firmware-pages/gh-pages',
  githubRepo: 'https://github.com/baymesh/firmware',
  releaseNotes: `
## Baymesh Firmware Features

### ⚠️ Not Compatible with Standard Meshtastic
This firmware is a custom fork and will NOT work with regular Meshtastic clients.

### MeshControl (Port 78)
Remote configuration of mesh nodes via signed HMAC packets.

### Relay Node Support
- **Broadcast relay_node**: Set which node should rebroadcast your broadcasts first
- **DM relay_node preference**: Configure a default relay node for direct messages

### Hop Limit
- HOP_MAX = 64 (reduced from 127)

### Defaults
- Position broadcast: OFF by default
- Node info broadcasts: Use regular hop limit

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
    zip_url: `https://baymesh.github.io/bayme.sh-firmware-pages/firmware-${eventFirmwareId}.zip`,
    release_notes: eventReleaseNotes,
  },
};

export const vendorCobrandingTag = "";
export const supportedVendorDeviceTags = ["RAK", "B&Q", "LilyGo", "Seeed", "Heltec", "DIY", "Elecrow", "M5Stack", "NomadStar", "muzi"];
