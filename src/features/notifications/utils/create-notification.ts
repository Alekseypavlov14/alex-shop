import { NotificationEntity } from "../types/notification-entity"
import { NotificationData } from "../types/notification-data"
import { generateId } from "@/shared/utils/generateId"

export function createNotification(notificationData: NotificationData): NotificationEntity {
  return ({ ...notificationData, id: generateId() })
}