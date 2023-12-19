'use client'

import { FC } from 'react'
import { useNotifications } from '../../store'
import { Notification } from '../Notification/Notification'
import styles from './NotificationContainer.module.scss'

interface NotificationContainerProps {}

export const NotificationContainer: FC<NotificationContainerProps> = () => {
  const notifications = useNotifications()

  return (
    <div className={styles.NotificationContainer}>
      {notifications.length === 0 ? null : (
        <Notification notification={notifications[0]} />
      )}
    </div>
  )
}