import { NotificationMessagesDictionary } from "@/features/notifications"

export const loginCookieName = 'login'
export const passwordCookieName = 'password'

export const httpStatusToNotificationMessageMapper: NotificationMessagesDictionary = {
  400: 'Invalid data was given',
  401: 'Login or password is incorrect',
  404: 'Login or password is incorrect',
  409: 'This login is already taken',
  500: 'An error occurred',
}