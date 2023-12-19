import { useAddNotification, useDeleteNotification } from "../store"
import { NOTIFICATION_SHOW_TIME } from "../constants"
import { createNotification } from "../utils/create-notification"
import { NotificationEntity } from "../types/notification-entity"
import { NotificationData } from "../types/notification-data"

export function useCreateNotification() {
  const addNotification = useAddNotification()
  const deleteNotification = useDeleteNotification()
  
  return (notificationData: NotificationData): NotificationEntity => {
    const notification = createNotification(notificationData)
    addNotification(notification)
    
    setTimeout(() => deleteNotification(notification.id), NOTIFICATION_SHOW_TIME)
    
    return notification
  }
}