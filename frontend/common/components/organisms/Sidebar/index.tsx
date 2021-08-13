import { VFC } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { ClipboardCheckIcon, DocumentTextIcon, FolderIcon } from '@heroicons/react/outline'
import './style'

type SidebarProps = {
  theme: string
  changeTheme: (theme: string) => void
}

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

const Sidebar: VFC<SidebarProps> = (props) => {
  const { theme, changeTheme } = props

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value)
  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Cobushi</h2>
      </div>
      <nav className="sidebar-menu">
        <MenuItem to="/tasks" text="Task" iconType="task" />
        <MenuItem to="/notes" text="Note" iconType="note" />
        <MenuItem to="/files" text="File" iconType="file" />
      </nav>
      <div className="select-theme">
        <select className="tw-select tw-select-sm" value={theme} onChange={handleChange}>
          <option>light</option>
          <option>dark</option>
          <option>cupcake</option>
          <option>bumblebee</option>
          <option>emerald</option>
          <option>corporate</option>
        </select>
      </div>
    </div>
  )
}

export default Sidebar
