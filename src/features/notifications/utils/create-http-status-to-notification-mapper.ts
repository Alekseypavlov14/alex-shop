import { notificationErrorStatus, notificationSuccessStatus } from "../constants"
import { NotificationMessagesDictionary } from "../types/notification-messages-dictionary"
import { defaultExceptionCode } from "@/services/http"
import { NotificationData } from "../types/notification-data"

export function createHttpStatusToNotificationMapper(notificationMessagesDictionary: NotificationMessagesDictionary) {
  return (httpStatus: number): NotificationData => {
    const notificationMessage = notificationMessagesDictionary[httpStatus] || notificationMessagesDictionary[defaultExceptionCode]
    const notificationStatus = httpStatus >= 300 ? notificationErrorStatus : notificationSuccessStatus

    return { message: notificationMessage, status: notificationStatus }
  }
}