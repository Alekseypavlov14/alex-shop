import { create } from 'zustand'

interface AuthenticationState {
  login: string
  password: string
}

interface AuthenticationActions {
  updateLogin: (login: string) => void
  updatePassword: (password: string) => void
}

export interface AuthenticationStore extends AuthenticationState, AuthenticationActions {}

export const useAuthenticationStore = create<AuthenticationStore>((set) => ({
  login: '',
  password: '',
  updateLogin: (login) => set((state) => ({ ...state, login })),
  updatePassword: (password) => set((state) => ({ ...state, password }))
}))

export const loginSelector = (state: AuthenticationStore) => state.login
export const passwordSelector = (state: AuthenticationStore) => state.password
export const updateLoginSelector = (state: AuthenticationStore) => state.updateLogin
export const updatePasswordSelector = (state: AuthenticationStore) => state.updatePassword

export const useAuthenticationLogin = () => useAuthenticationStore(loginSelector)
export const useAuthenticationPassword = () => useAuthenticationStore(passwordSelector)
export const useUpdateLogin = () => useAuthenticationStore(updateLoginSelector)
export const useUpdatePassword = () => useAuthenticationStore(updatePasswordSelector)
