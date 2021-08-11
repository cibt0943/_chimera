import { VFC } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { ClipboardCheckIcon, FolderIcon, DocumentTextIcon } from '@heroicons/react/outline'
import './style'

type MenuItemProps = {
  text: string
  iconType: 'task' | 'file' | 'note'
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
        <IconComponent className="tw-h-6 tw-w-6" />
      </span>
      <span className="tw-ml-4 tw-font-medium">{props.text}</span>
    </RouterLink>
  )
}

const Sidebar: VFC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2 className="tw-text-3xl tw-font-semibold">Cobushi</h2>
      </div>
      <nav className="sidebar-menu">
        <MenuItem to="/tasks" text="Task" iconType="task" />
        <MenuItem to="/files" text="File" iconType="file" />
        <MenuItem to="/notes" text="Note" iconType="note" />
      </nav>
    </div>
  )
}

export default Sidebar
