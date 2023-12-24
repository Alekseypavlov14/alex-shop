import { authenticationClientService, saveCredentialsInCookies } from "@/processes/authentication/client"
import { useAuthenticationLogin, useAuthenticationPassword } from "../store"
import { mapHttpStatusToNotification } from '../utils/map-http-status-to-notification'
import { interceptAsHTTPException } from '@/services/http'
import { useCreateNotification } from '@/features/notifications'
import { useNavigation } from '@/services/navigation'

export function useSignUp() {
  const login = useAuthenticationLogin()
  const password = useAuthenticationPassword()

  const createNotification = useCreateNotification()
  const { navigateHomePage } = useNavigation()

  return async () => { 
    return await authenticationClientService
      .signUpWithLoginAndPassword({ login, password })
      .then(saveCredentialsInCookies)
      .then(navigateHomePage)
      .catch(interceptAsHTTPException((exception) => createNotification(mapHttpStatusToNotification(exception.code))))
  }
}