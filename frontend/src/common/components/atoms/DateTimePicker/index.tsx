import React from 'react'
import {
  LocalizationProvider as MUILocalizationProvider,
  DatePicker as MUIDatePicker,
  DatePickerProps as MUIDatePickerProps,
  TimePicker as MUITimePicker,
  TimePickerProps as MUITimePickerProps,
  DateTimePicker as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import ja from 'date-fns/locale/ja'

type LocalizationProviderProps = {
  children: React.ReactNode
}

export const LocalizationProvider: React.VFC<LocalizationProviderProps> = (
  props,
) => {
  const { children } = props

  return (
    <MUILocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
      {children}
    </MUILocalizationProvider>
  )
}

type DatePickerProps = MUIDatePickerProps<Date>

export const DatePicker: React.VFC<DatePickerProps> = (props) => {
  const { ...dataPickerProps } = props

  return <MUIDatePicker {...dataPickerProps} />
}

type TimePickerProps = MUITimePickerProps<Date>

export const TimePicker: React.VFC<TimePickerProps> = (props) => {
  const { ...timePickerProps } = props

  return <MUITimePicker {...timePickerProps} />
}

type DateTimePickerProps = MUIDateTimePickerProps<Date>

export const DateTimePicker: React.VFC<DateTimePickerProps> = (props) => {
  const { ...dataTimePickerProps } = props

  return <MUIDateTimePicker {...dataTimePickerProps} />
}
