import { useEffect, useRef, useState } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? 'down' : 'up'

      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 5) {
        setScrollDirection(direction)
      }

      setLastScrollY(scrollY > 0 ? scrollY : 0)
    }

    const throttledUpdateScrollDirection = throttle(updateScrollDirection, 100)

    window.addEventListener('scroll', throttledUpdateScrollDirection)
    return () => window.removeEventListener('scroll', throttledUpdateScrollDirection)
  }, [scrollDirection, lastScrollY])

  return scrollDirection
}

export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [hasIntersected, options])

  return { ref, isIntersecting, hasIntersected }
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue] as const
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export function useThrottle<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): T {
  const lastRan = useRef<number>(Date.now())

  return ((...args: Parameters<T>) => {
    if (Date.now() - lastRan.current >= delay) {
      callback(...args)
      lastRan.current = Date.now()
    }
  }) as T
}

function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): T {
  let inThrottle: boolean
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(func, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }) as T
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

// Smooth scroll hook using Lenis
export function useSmoothScroll() {
  useEffect(() => {
    // Dynamically import Lenis to avoid SSR issues
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default

        // Create Lenis instance with basic configuration
        const lenis = new Lenis()

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Cleanup function
        return () => {
          lenis.destroy()
        }
      } catch (error) {
        console.warn('Lenis smooth scroll not available:', error)
      }
    }

    const cleanup = initLenis()

    return () => {
      cleanup?.then(cleanupFn => cleanupFn?.())
    }
  }, [])
}
