import { NotificationStatus } from "./notification-status"
import { Id } from "@/shared/types/Id"

export interface NotificationEntity {
  id: Id
  message: string
  status: NotificationStatus
}