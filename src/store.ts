import { create } from "zustand"

interface countState {
    count: number
}

export const useCountStore = create<countState>(() => ({
    count: 1
}))