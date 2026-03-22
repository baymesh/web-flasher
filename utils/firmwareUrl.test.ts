import { describe, expect, it } from 'vitest'
import { eventMode, forkConfig } from '~/types/resources'
import { getFirmwareBaseUrl, getGithubIoBase, getManifestBasePath } from './firmwareUrl'

describe('firmwareUrl', () => {
  describe('getManifestBasePath', () => {
    it('returns the standard path for the current Baymesh prerelease', () => {
      const version = '2.7.21.697b14d'
      expect(getManifestBasePath(version)).toBe('firmware-2.7.21.697b14d')
    })

    it('returns the event path only for the configured event firmware version', () => {
      const eventVersion = eventMode.firmware.id.replace(/^v/, '')
      expect(getManifestBasePath(eventVersion)).toBe(`event/hamcation2026/firmware-${eventVersion}`)
      expect(getManifestBasePath(`v${eventVersion}`)).toBe(`event/hamcation2026/firmware-${eventVersion}`)
    })

    it('returns the standard path for regular versions', () => {
      expect(getManifestBasePath('2.7.19.abcdef')).toBe('firmware-2.7.19.abcdef')
      expect(getManifestBasePath('v2.7.19.abcdef')).toBe('firmware-2.7.19.abcdef')
      expect(getManifestBasePath('2.5.0')).toBe('firmware-2.5.0')
    })
  })

  describe('getGithubIoBase', () => {
    it('uses the Baymesh firmware pages repo when the fork is enabled', () => {
      expect(getGithubIoBase()).toBe(forkConfig.firmwareRepo)
    })
  })

  describe('getFirmwareBaseUrl', () => {
    it('builds full URLs for standard releases', () => {
      expect(getFirmwareBaseUrl('2.7.19.abcdef')).toBe(
        `${forkConfig.firmwareRepo}/firmware-2.7.19.abcdef`,
      )
      expect(getFirmwareBaseUrl('2.5.0')).toBe(
        `${forkConfig.firmwareRepo}/firmware-2.5.0`,
      )
    })

    it('builds the full event URL for the configured event firmware', () => {
      const eventVersion = eventMode.firmware.id.replace(/^v/, '')
      expect(getFirmwareBaseUrl(eventVersion)).toBe(
        `${forkConfig.firmwareRepo}/event/hamcation2026/firmware-${eventVersion}`,
      )
    })
  })
})
