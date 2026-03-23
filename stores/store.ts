import { forkConfig } from '~/types/resources'

export function createUrl(relativeUrl: string) {
  let host = window.location.host
  if (process.env.NODE_ENV !== 'development' && !forkConfig.enabled && relativeUrl.startsWith('api')) {
    host = 'api.meshtastic.org'
    relativeUrl = relativeUrl.replace('api/', '')
  }
  const base = `${window.location.protocol}//${host}`
  return `${base}/${relativeUrl}`
}
