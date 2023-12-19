import { NotificationEntity } from "./notification-entity";

export interface NotificationData extends Omit<NotificationEntity, 'id'> {}