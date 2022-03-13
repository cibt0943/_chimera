import React from 'react'
import classNames from 'classnames/bind'
import { Switch, SwitchProps } from '@mui/material'
import { ColorModeContext } from 'common/context/ColorModeContext'
import { useThemeUtil } from 'common/hooks/useThemeUtil'
import './style'

export const ColorModeSwitch: React.VFC<SwitchProps> = (props) => {
  const { className: propClassName, ...other } = props
  const { toggleColorMode } = React.useContext(ColorModeContext)
  const { isDark } = useThemeUtil()

  const className = classNames(propClassName, 'color-mode-switch')
  return (
    <Switch
      checked={isDark}
      onChange={toggleColorMode}
      className={className}
      {...other}
    />
  )
}
