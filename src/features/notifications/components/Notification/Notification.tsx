'use client'

import { FC } from 'react'
import { useDeleteNotification } from '../../store'
import { NotificationEntity } from '../../types/notification-entity'
import { NotificationStatus } from '../../types/notification-status'
import { clsx } from '@/shared/utils/clsx'
import Image from 'next/image'
import cancelIcon from '@/shared/icons/cancel-small-white.svg'
import styles from './Notification.module.scss'

interface NotificationProps {
  notification: NotificationEntity
}

const notificationStatusModifiers: Record<NotificationStatus, string> = {
  info: styles.InfoNotificationModifier,
  success: styles.SuccessNotificationModifier,
  error: styles.ErrorNotificationModifier,
  warning: styles.WarningNotificationModifier,
}

export const Notification: FC<NotificationProps> = ({ notification }) => {
  const notificationStatusModifier = notificationStatusModifiers[notification.status]
  const classNames = clsx(styles.Notification, notificationStatusModifier)

  const deleteNotification = useDeleteNotification()
  
  function deleteNotificationHandler() {
    deleteNotification(notification.id)
  }

  return (
    <div className={classNames}>
      {notification.message}

      <Image 
        onClick={deleteNotificationHandler}
        src={cancelIcon} 
        alt='' 
      />
    </div>
  )
}