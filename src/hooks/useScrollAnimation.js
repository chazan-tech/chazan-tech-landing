import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a boolean `isVisible`.
 * Once the element enters the viewport it stays visible (one-shot).
 */
export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

/**
 * Staggered animation helper — returns a delay class string based on index.
 */
export function staggerDelay(index, base = 100) {
  return { transitionDelay: `${index * base}ms` }
}
