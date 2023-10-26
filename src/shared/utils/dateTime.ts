export interface TimeData {
  years?: number
  months?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
}

export class DateTime {
  private time: Date

  constructor(timeData: TimeData = DateTime.mapDateToTimeData(new Date())) {
    this.time = DateTime.mapTimeDataToDate(timeData)
  }

  getTimeData(): Required<TimeData> {
    return DateTime.mapDateToTimeData(this.time)
  }

  getDateTimeBefore(timeData: TimeData): DateTime {
    // create clone of this.time
    const currentDate = new Date(this.time.getTime())

    if (timeData.years) currentDate.setFullYear(currentDate.getFullYear() - timeData.years)
    if (timeData.months) currentDate.setMonth(currentDate.getMonth() - timeData.months)
    if (timeData.days) currentDate.setDate(currentDate.getDate() - timeData.days)
    if (timeData.hours) currentDate.setHours(currentDate.getHours() - timeData.hours)
    if (timeData.minutes) currentDate.setMinutes(currentDate.getMinutes() - timeData.minutes)
    if (timeData.seconds) currentDate.setSeconds(currentDate.getSeconds() - timeData.seconds)
    if (timeData.milliseconds) currentDate.setMilliseconds(currentDate.getMilliseconds() - timeData.milliseconds)

    return new DateTime(DateTime.mapDateToTimeData(currentDate))
  }

  getDateTimeAfter(timeData: TimeData): DateTime {
    // create clone of this.time
    const currentDate = new Date(this.time.getTime())

    if (timeData.years) currentDate.setFullYear(currentDate.getFullYear() + timeData.years)
    if (timeData.months) currentDate.setMonth(currentDate.getMonth() + timeData.months)
    if (timeData.days) currentDate.setDate(currentDate.getDate() + timeData.days)
    if (timeData.hours) currentDate.setHours(currentDate.getHours() + timeData.hours)
    if (timeData.minutes) currentDate.setMinutes(currentDate.getMinutes() + timeData.minutes)
    if (timeData.seconds) currentDate.setSeconds(currentDate.getSeconds() + timeData.seconds)
    if (timeData.milliseconds) currentDate.setMilliseconds(currentDate.getMilliseconds() + timeData.milliseconds)

    return new DateTime(DateTime.mapDateToTimeData(currentDate))
  }

  static mapTimeDataToDate(timeData: TimeData): Date {
    const currentDate = new Date()
    const normalizedTimeData = DateTime.normalizeTimeData(timeData)

    currentDate.setFullYear(normalizedTimeData.years)
    currentDate.setMonth(normalizedTimeData.months - 1)
    currentDate.setDate(normalizedTimeData.days)
    currentDate.setHours(normalizedTimeData.hours)
    currentDate.setMinutes(normalizedTimeData.minutes)
    currentDate.setSeconds(normalizedTimeData.seconds)
    currentDate.setMilliseconds(normalizedTimeData.milliseconds)

    return currentDate
  }

  static mapDateToTimeData(date: Date): Required<TimeData> {
    return {
      years: date.getFullYear(),
      months: date.getMonth() + 1,
      days: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      milliseconds: date.getMilliseconds(),
    }
  }

  static normalizeTimeData(timeData: TimeData): Required<TimeData> {
    const now = new Date()

    return ({
      years: timeData.years || now.getFullYear(),
      months: timeData.months || now.getMonth() + 1,
      days: timeData.days || now.getDate(),
      hours: timeData.hours || 0,
      minutes: timeData.minutes || 0,
      seconds: timeData.seconds || 0,
      milliseconds: timeData.milliseconds || 0
    })
  }
}
