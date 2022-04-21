import React from 'react'
import {
  LocalizationProvider,
  DateTimePicker as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import ja from 'date-fns/locale/ja'

type DateTimePickerProps = MUIDateTimePickerProps<Date>

export const DateTimePicker: React.VFC<DateTimePickerProps> = (props) => {
  const { ...dataTimePickerProps } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
      <MUIDateTimePicker {...dataTimePickerProps} />
    </LocalizationProvider>
  )
}
