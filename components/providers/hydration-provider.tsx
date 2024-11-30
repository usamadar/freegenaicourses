'use client'

import { useEffect, useState } from 'react'
import { useBookmarkStore } from '@/lib/store'

export function HydrationZustand({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)
  const setStoreHydrated = useBookmarkStore((state) => state.setHydrated)

  useEffect(() => {
    // Initialize store hydration and set state
    useBookmarkStore.persist.rehydrate()
    setIsHydrated(true)
    setStoreHydrated()
  }, [setStoreHydrated])

  // During SSR and hydration, return a static loading state
  if (!isHydrated) {
    return null
  }

  return <>{children}</>
} 