import { defaultExceptionCode } from "@/services/http"

export type NotificationMessagesDictionary = Record<number, string> & { [defaultExceptionCode]: string }