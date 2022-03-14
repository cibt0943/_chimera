import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import {
  HiOutlineClipboardCheck,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlineExclamationCircle,
} from 'react-icons/hi'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useThemeUtil } from 'common/hooks/useThemeUtil'
import { MyselfMenu } from 'common/components/organisms/MyselfMenu'

export const Sidebar: React.VFC = () => {
  const { palette, modeValue } = useThemeUtil()
  const bgColor = modeValue(palette.grey[800], 'black')

  return (
    <Box
      bgcolor={bgColor}
      minHeight="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        bgcolor={bgColor}
        color="white"
        height="3.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="sticky"
        top="0"
        zIndex="1"
      >
        <Typography variant="h6" fontWeight="bold">
          Kobushi
        </Typography>
      </Box>
      <Box ml="20px" display="flex" flexDirection="column" flex="1">
        <List sx={{ flexGrow: 1 }}>
          <MenuItem to="/tasks" text="Task" iconType="task" />
          <MenuItem to="/notes" text="Note" iconType="note" />
          <MenuItem to="/files" text="Filer" iconType="filer" />
          <MenuItem to="/func_a" text="func A" iconType="func_a" />
          <MenuItem to="/func_b" text="func B" iconType="func_b" />
        </List>
        <Box mb="20px" textAlign="center">
          <MyselfMenu />
        </Box>
      </Box>
    </Box>
  )
}

type MenuItemProps = {
  text: string
  iconType: 'task' | 'note' | 'filer' | 'func_a' | 'func_b'
  to: string
}

const iconComponents = {
  task: HiOutlineClipboardCheck,
  note: HiOutlineDocumentText,
  filer: HiOutlineFolder,
  func_a: HiOutlineExclamationCircle,
  func_b: HiOutlineExclamationCircle,
}

const MenuItem: React.VFC<MenuItemProps> = (props) => {
  const IconComponent = iconComponents[props.iconType]

  // <Box display="flex" p="0.75rem" alignItems="center" borderRadius="20px 0 0 20px" className="sidebar-menu-item" transition="all 0.2s">
  // const className = useMatch(props.to) ? 'sidebar-menu-item-active' : ''

  const { palette, modeValue } = useThemeUtil()
  const baseColor = modeValue(palette.grey[400], palette.grey[400])
  const bgColor = modeValue(palette.grey[800], 'black')
  const activeColor = modeValue('black', 'white')
  const activeBgColor = modeValue('white', palette.grey[700])

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={RouterLink}
        to={props.to}
        sx={{
          borderRadius: '20px 0 0 20px',
          color: baseColor,
          '&:hover': {
            color: 'white',
            backgroundColor: bgColor,
          },
          '&.active': {
            color: activeColor,
            backgroundColor: activeBgColor,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: '36px', color: 'inherit' }}>
          <IconComponent size="1.5rem" />
        </ListItemIcon>
        <ListItemText>{props.text}</ListItemText>
      </ListItemButton>
    </ListItem>
  )
}
