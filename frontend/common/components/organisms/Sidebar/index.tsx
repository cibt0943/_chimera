import { VFC } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { ClipboardCheckIcon, DocumentTextIcon, FolderIcon } from '@heroicons/react/outline'
import LoginButton from 'common/components/organisms/LoginButton'
import MyselfMenu from 'common/components/organisms/MyselfMenu'
import './style'

type MenuItemProps = {
  text: string
  iconType: 'task' | 'note' | 'file'
  to: string
}

const iconComponents = {
  task: ClipboardCheckIcon,
  file: FolderIcon,
  note: DocumentTextIcon,
}

const MenuItem: VFC<MenuItemProps> = (props) => {
  const IconComponent = iconComponents[props.iconType]

  return (
    <RouterLink to={props.to} className="sidebar-menu-item" activeClassName="sidebar-menu-item-active">
      <span>
        <IconComponent className="sidebar-menu-icon" />
      </span>
      <span className="sidebar-menu-label">{props.text}</span>
    </RouterLink>
  )
}

const Sidebar: VFC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Kobushi</h2>
      </div>
      <div className="sidebar-main">
        <nav className="sidebar-menu">
          <MenuItem to="/tasks" text="Task" iconType="task" />
          <MenuItem to="/notes" text="Note" iconType="note" />
          <MenuItem to="/files" text="File" iconType="file" />
        </nav>
        <div className="sidebar-account">
          <LoginButton />
          <MyselfMenu />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
