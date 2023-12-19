import { NotificationEntity } from './types/notification-entity'
import { create } from 'zustand'
import { Id } from '@/shared/types/Id'

export interface NotificationState {
  notifications: NotificationEntity[]
}

export interface NotificationActions {
  addNotification: (notification: NotificationEntity) => void
  deleteNotification: (notificationId: Id) => void
}

export interface NotificationStore extends NotificationState, NotificationActions {}

export const useNotificationStore = create<NotificationStore>(set => ({
  notifications: [],
  addNotification: (notification: NotificationEntity) => set(state => ({ ...state, notifications: [ notification, ...state.notifications ]})),
  deleteNotification: (notificationId: Id) => set(state => ({ ...state, notifications: state.notifications.filter(notification => notification.id !== notificationId)})) 
}))

export const notificationsSelector = (store: NotificationStore) => store.notifications
export const addNotificationSelector = (store: NotificationStore) => store.addNotification
export const deleteNotificationSelector = (store: NotificationStore) => store.deleteNotification

export const useNotifications = () => useNotificationStore(notificationsSelector)
export const useAddNotification = () => useNotificationStore(addNotificationSelector)
export const useDeleteNotification = () => useNotificationStore(deleteNotificationSelector)