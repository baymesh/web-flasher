import { eventMode, forkConfig } from '~/types/resources'

// Default GitHub IO base for Meshtastic
const DEFAULT_GITHUB_IO_BASE = 'https://raw.githubusercontent.com/meshtastic/meshtastic.github.io/master'

// Fork GitHub IO base (override this with your fork's firmware repo)
const FORK_GITHUB_IO_BASE = forkConfig.firmwareRepo || DEFAULT_GITHUB_IO_BASE

/**
 * Get the GitHub IO base URL for firmware
 * Uses fork config if enabled, otherwise defaults to Meshtastic
 */
export function getGithubIoBase(): string {
  if (forkConfig.enabled) {
    return FORK_GITHUB_IO_BASE
  }
  return DEFAULT_GITHUB_IO_BASE
}

/**
 * Determine the correct base path for a firmware version
 * Event firmware uses a special path, while normal firmware uses the standard path
 * @param version - The firmware version (with or without 'v' prefix)
 * @returns The base path for fetching firmware files
 */
export function getManifestBasePath(version: string): string {
  const cleanVersion = version.replace(/^v/, '')
  const eventVersion = eventMode.firmware.id.replace(/^v/, '')
  // Check if this is the event firmware version
  if (cleanVersion === eventVersion) {
    return `event/hamcation2026/firmware-${cleanVersion}`
  }
  return `firmware-${cleanVersion}`
}

/**
 * Get the base URL for fetching firmware files
 * @param version - The firmware version (with or without 'v' prefix)
 * @returns The base URL for the firmware files directory
 */
export function getFirmwareBaseUrl(version: string): string {
  return `${getGithubIoBase()}/${getManifestBasePath(version)}`
}
