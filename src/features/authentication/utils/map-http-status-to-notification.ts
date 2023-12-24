import { NotificationData, createHttpStatusToNotificationMapper } from "@/features/notifications"
import { httpStatusToNotificationMessageMapper } from "../constants"

const httpStatusToNotificationMapper = createHttpStatusToNotificationMapper(httpStatusToNotificationMessageMapper)

export function mapHttpStatusToNotification(httpStatus: number): NotificationData {
  const notification = httpStatusToNotificationMapper(httpStatus)
  return notification
}