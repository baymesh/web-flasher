import type { FirmwareResource } from './api';

// Remove the OfflineHardwareList since it's now in /public/data/hardware-list.json

const currentPrereleaseId = '2.7.21.b14af14';

export const showPrerelease = true;

const baymeshReleaseNotes = `
## Baymesh Firmware Features

### ⚠️ Not Compatible with Standard Meshtastic
This firmware is a custom fork and will NOT work with regular Meshtastic clients.

### MeshControl (Port 78)
Remote configuration of mesh nodes via signed HMAC packets with HMAC-SHA256 authentication, replay protection, and rate limiting.

### Extended Hop Limit
- **HOP_MAX = 64** — unicast packets can traverse the full Bay Area mesh
- **HOP_BROADCAST = 3** — flood traffic stays contained
- Broadcast and unicast hop limits are configured independently via \`lora.broadcast_hop_limit\`

### Defaults
- Position broadcast: OFF by default
- Broadcast hop limit: 3 (configurable)
- Unicast hop limit: 64 (configurable)

### Configuration
Use the iOS/Android app or CLI to configure these features.
`;

// Fork Configuration
// Set the GitHub repo that hosts your fork firmware
export const forkConfig = {
  enabled: true,
  staticReleasesOnly: true,
  name: 'Baymesh Firmware',
  description: 'Custom Meshtastic fork with MeshControl, HOP_MAX=64, separate broadcast hop limit, and position broadcast off by default',
  firmwareRepo: 'https://raw.githubusercontent.com/baymesh/bayme.sh-firmware-pages/gh-pages',
  githubRepo: 'https://github.com/RCGV1/firmware-Fork/tree/baymesh-refactor',
  releaseNotes: baymeshReleaseNotes,
};

export const currentPrerelease = <FirmwareResource>{
  id: `v${currentPrereleaseId}`,
  title: `Baymesh Firmware ${currentPrereleaseId}`,
  zip_url: `https://raw.githubusercontent.com/baymesh/bayme.sh-firmware-pages/gh-pages/firmware-${currentPrereleaseId}.zip`,
  release_notes: baymeshReleaseNotes,
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
- HOP_MAX=64: Extended hop limit for Bay Area mesh

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
