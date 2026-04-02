'use client'
import { createContext, useContext, useState } from 'react'

interface NDAContextType {
  isOpen: boolean
  openNDA: () => void
  closeNDA: () => void
}

const NDAContext = createContext<NDAContextType | null>(null)

export function NDAProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NDAContext.Provider value={{
      isOpen,
      openNDA: () => setIsOpen(true),
      closeNDA: () => setIsOpen(false),
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
