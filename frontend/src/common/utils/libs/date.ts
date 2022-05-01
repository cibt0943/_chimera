import { format as dateFormat } from 'date-fns'

export const utcStrToZonedTime = (utc: string, format = 'yyyy-MM-dd HH:mm') => {
  if (utc == null) return ''
  const utcDate = new Date(utc)
  return dateFormat(utcDate, format)
}

export const zonedTimeToUtcStr = (tz: string) => {
  if (tz == null) return ''
  const tzDate = new Date(tz)
  return tzDate.toISOString()
}
