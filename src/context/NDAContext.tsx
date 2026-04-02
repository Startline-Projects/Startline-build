'use client'
import { createContext, useContext, useState } from 'react'

interface NDAContextType {
  isOpen: boolean
  hasAccess: boolean
  openNDA: () => void
  closeNDA: () => void
  unlockPortfolio: () => void
}

const NDAContext = createContext<NDAContextType | null>(null)

export function NDAProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)
  return (
    <NDAContext.Provider value={{
      isOpen,
      hasAccess,
      openNDA: () => setIsOpen(true),
      closeNDA: () => setIsOpen(false),
      unlockPortfolio: () => setHasAccess(true),
    }}>
      {children}
    </NDAContext.Provider>
  )
}

export function useNDA() {
  const ctx = useContext(NDAContext)
  if (!ctx) throw new Error('useNDA must be used within NDAProvider')
  return ctx
}
