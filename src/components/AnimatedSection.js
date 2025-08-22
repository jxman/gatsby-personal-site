import React, { useEffect, useRef, useState } from "react"

const AnimatedSection = ({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
}) => {
  // Initialize with true for SSR compatibility
  const [isVisible, setIsVisible] = useState(typeof window === "undefined")
  const [hasLoaded, setHasLoaded] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    setHasLoaded(true)

    if (typeof window === "undefined" || !window.IntersectionObserver) {
      // Fallback for SSR or browsers without IntersectionObserver
      setIsVisible(true)
      return
    }

    // Reset visibility for client-side intersection observer
    if (!isVisible) {
      setIsVisible(false)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [delay, threshold, isVisible])

  // Prevent animations until client-side hydration is complete
  const shouldAnimate = hasLoaded && typeof window !== "undefined"
  const showVisible = shouldAnimate ? isVisible : true

  const animationClasses = {
    fadeInUp: `transform transition-all duration-700 ease-out ${
      showVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`,
    fadeInLeft: `transform transition-all duration-700 ease-out ${
      showVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
    }`,
    fadeInRight: `transform transition-all duration-700 ease-out ${
      showVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
    }`,
    fadeIn: `transition-all duration-700 ease-out ${
      showVisible ? "opacity-100" : "opacity-0"
    }`,
    scaleIn: `transform transition-all duration-700 ease-out ${
      showVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
    }`,
    slideInUp: `transform transition-all duration-500 ease-out ${
      showVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`,
  }

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
