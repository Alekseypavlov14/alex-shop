import { authenticationClientService } from "@/processes/authentication/client"
import { AuthenticationCredentials } from "@/processes/authentication"
import { create } from "zustand"
import { Id } from "@/shared/types/Id"

export interface UserState {
  id: Id | null
  userCredentials: AuthenticationCredentials | null
}

export interface UserStoreActions {
  updateUserId: (id: Id | null) => void
  updateUserCredentials: (userCredentials: AuthenticationCredentials | null) => void
}

export const useUserStore = create<UserState & UserStoreActions>((set) => ({
  id: null,
  userCredentials: authenticationClientService.getCredentials(),

  updateUserId: (id) => set(state => ({ ...state, id })),
  updateUserCredentials: (userCredentials) => set(state => ({ ...state, ...userCredentials })),
}))

export const userIdSelector = (state: UserState) => state.id
export const userCredentialsSelector = (state: UserState) => state.userCredentials