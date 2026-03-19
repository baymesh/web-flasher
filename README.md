# Meshtastic Fork Web Flasher

A customized version of the [Meshtastic Web Flasher](https://github.com/meshtastic/web-flasher) that distributes fork firmware with MeshControl and relay_node features.

## Fork Features

This web flasher distributes Meshtastic firmware with the following customizations:

### MeshControl (Port 78)
Remote configuration of mesh nodes via signed HMAC packets.

**Configuration options:**
- `control_key`: 32-byte shared secret for authenticating control packets
- `accept_policy`: DISABLED, PROMPT, or AUTO
- `min_interval_secs`: Rate limiting between control packets

**Permission flags:**
- `allow_lora_config`: Allow LoRa parameter changes
- `allow_hop_limits`: Allow hop limit changes
- `allow_position_interval`: Allow position broadcast interval changes
- `allow_telemetry_interval`: Allow telemetry interval changes
- `allow_node_info_interval`: Allow node info interval changes

### Relay Node Support

**For Broadcasts:**
- Client apps can set `relay_node` in MeshPacket to designate which node should rebroadcast
- Only the designated node will rebroadcast; others ignore the packet

**For Direct Messages:**
- New `dm_relay_node` preference in DeviceConfig
- When set, all DMs use that node as the relay

### Hop Limit
- Changed `HOP_MAX` from 127 to 64

## Usage

1. Visit the deployed web flasher
2. Select your device
3. Flash the fork firmware
4. Configure MeshControl settings via the iOS app or CLI

## Development

### Prerequisites
- Node.js 18+
- pnpm
- For building firmware: PlatformIO Core, nanopb

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Building Firmware

Use the script from the firmware repository:
```bash
cd ../firmware-Fork
pio run -e rak4631
```

Or use the publish script:
```bash
cd scripts
./publish-firmware.sh
```

## Deployment

This is a Nuxt.js application. Deploy to Vercel or any Node.js hosting:

```bash
pnpm run build
```

## Customization

### Configuration Files

- `types/resources.ts` - Fork firmware version and configuration
- `utils/firmwareUrl.ts` - Firmware URL base path
- `public/data/manifest.json` - Branding customization

### Enabling Fork Mode

Set `forkConfig.enabled = true` in `types/resources.ts` to lock the flasher to fork firmware only.

## License

Based on the [Meshtastic Web Flasher](https://github.com/meshtastic/web-flasher) project.
See the original project for licensing details.
