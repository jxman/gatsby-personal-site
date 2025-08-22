import { useEffect, useState } from "react"

/**
 * ClientOnly component to prevent hydration mismatches
 * Renders children only after client-side hydration is complete
 */
const ClientOnly = ({ children, fallback = null }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return fallback
  }

  return children
}

export default ClientOnly
