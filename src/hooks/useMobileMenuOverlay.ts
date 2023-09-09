import { create } from 'zustand'

interface useMobileMenuOverlayStore {
  open: boolean
  setOpen: (value: boolean) => void
}

const useMobileMenuOverlay = create<useMobileMenuOverlayStore>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
}))

export default useMobileMenuOverlay
