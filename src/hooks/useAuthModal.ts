import { create } from 'zustand'

interface useAuthModalStore {
  open: boolean
  setOpen: (value: boolean) => void
}

const useAuthModal = create<useAuthModalStore>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
}))

export default useAuthModal
