import { VFC, useState } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { ClipboardCheckIcon, DocumentTextIcon } from '@heroicons/react/outline'
import './style'

type MenuItemProps = {
  text: string
  iconType: 'todo' | 'note'
  to: string
}

const iconComponents = {
  todo: ClipboardCheckIcon,
  note: DocumentTextIcon,
}

const MenuItem: VFC<MenuItemProps> = (props) => {
  const IconComponent = iconComponents[props.iconType]
  return (
    <RouterLink to={props.to} className="sidebar-menu-item" activeClassName="sidebar-menu-item-active">
      <span>
        <IconComponent className="tw-h-6 tw-w-6" />
      </span>
      <span className="tw-ml-4 tw-font-medium">{props.text}</span>
    </RouterLink>
  )
}

const Sidebar: VFC = () => {
  // const [showSideMenu, setShowSideMenu] = useState(true)

  // const handleToggleDrawer = () => {
  //   setShowSideMenu(!showSideMenu)
  // }

  {
    /* <IconButton onClick={handleToggleDrawer}>{showSideMenu ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton> */
  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2 className="tw-text-3xl tw-font-semibold">Cobushi</h2>
      </div>
      <nav className="sidebar-menu">
        <MenuItem to="/tasks" text="Todo" iconType="todo" />
        <MenuItem to="/memos" text="Note" iconType="note" />
        <MenuItem to="/memos" text="Link" iconType="note" />
        <MenuItem to="/memos" text="File" iconType="note" />
      </nav>
    </div>
  )
}

export default Sidebar
