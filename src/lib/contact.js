import { track } from './tracking'

export const WHATSAPP_NUMBER = '5521994097502'

export function whatsappUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function trackContact(source) {
  track('Contact', { content_name: source })
}
