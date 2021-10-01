import { VFC } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { ClipboardCheckIcon, DocumentTextIcon, FolderIcon, ExclamationCircleIcon, TrashIcon } from '@heroicons/react/outline'
import { Heading, Box, useColorModeValue, Flex } from '@chakra-ui/react'
import { MyselfMenu } from 'common/components/organisms/MyselfMenu'
import './style'

export const Sidebar: VFC = () => {
  const bgColor = useColorModeValue('gray.800', 'black')
  const color = useColorModeValue('white', 'white')
  const menuItemColor = useColorModeValue('gray.400', 'gray.400')

  return (
    <Box bgColor={bgColor} display="flex" flexDirection="column" minHeight="full">
      <Box bgColor={bgColor} color={color} height={14} display="flex" alignItems="center" justifyContent="center" position="sticky" top="0">
        <Heading as="h2" fontSize={28}>
          Kobushi
        </Heading>
      </Box>
      <Box display="flex" flexDirection="column" flex="1">
        <Box color={menuItemColor} flexGrow={1} pl={8}>
          <nav>
            <MenuItem to="/tasks" text="Task" iconType="task" />
            <MenuItem to="/notes" text="Note" iconType="note" />
            <MenuItem to="/files" text="Filer" iconType="filer" />
            <MenuItem to="/func_a" text="func A" iconType="func_a" />
            <MenuItem to="/func_b" text="func B" iconType="func_b" />
          </nav>
          <Box mt={7} />
          <nav>
            <MenuItem to="/trash" text="Trash" iconType="trash" />
          </nav>
        </Box>
        <Box mb={3} textAlign="center">
          <MyselfMenu />
        </Box>
      </Box>
    </Box>
  )
}

type MenuItemProps = {
  text: string
  iconType: 'task' | 'note' | 'filer' | 'func_a' | 'func_b' | 'trash'
  to: string
}

const iconComponents = {
  task: ClipboardCheckIcon,
  note: DocumentTextIcon,
  filer: FolderIcon,
  func_a: ExclamationCircleIcon,
  func_b: ExclamationCircleIcon,
  trash: TrashIcon,
}

const MenuItem: VFC<MenuItemProps> = (props) => {
  const IconComponent = iconComponents[props.iconType]

  return (
    <RouterLink to={props.to} exact activeClassName="sidebar-menu-item-active">
      <Flex p={3} alignItems="center" borderLeftRadius={20} className="sidebar-menu-item" transition="all 0.2s">
        <Box as="span" height={6} width={6}>
          <IconComponent />
        </Box>
        <Box as="span" ml={2} fontWeight="medium">
          {props.text}
        </Box>
      </Flex>
    </RouterLink>
  )
}
