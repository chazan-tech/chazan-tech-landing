// Meta Pixel. Só carrega com VITE_META_PIXEL_ID definido e depois do aceite de cookies.
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID
const CONSENT_KEY = 'chazan_cookie_consent'

let started = false

function hasConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'accepted'
  } catch {
    return false
  }
}

export function initTracking() {
  if (!PIXEL_ID || started || !hasConsent()) return
  started = true

  /* eslint-disable */
  ;(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = true
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable */

  window.fbq('init', PIXEL_ID)
  window.fbq('track', 'PageView')
}

// Sem pixel ou sem consentimento, window.fbq não existe e a chamada não faz nada.
export function track(event, params) {
  if (typeof window !== 'undefined' && window.fbq) window.fbq('track', event, params)
}
