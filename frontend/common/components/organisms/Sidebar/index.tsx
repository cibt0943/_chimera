import { VFC } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { ClipboardCheckIcon, DocumentTextIcon, FolderIcon, ExclamationCircleIcon, TrashIcon } from '@heroicons/react/outline'
import MyselfMenu from 'common/components/organisms/MyselfMenu'
import './style'

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
    <RouterLink to={props.to} exact className="sidebar-menu-item" activeClassName="sidebar-menu-item-active">
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
        <div className="sidebar-menu">
          <nav>
            <MenuItem to="/tasks" text="Task" iconType="task" />
            <MenuItem to="/notes" text="Note" iconType="note" />
            <MenuItem to="/files" text="Filer" iconType="filer" />
            <MenuItem to="/func_a" text="func A" iconType="func_a" />
            <MenuItem to="/func_b" text="func B" iconType="func_b" />
          </nav>
          <div className="tw-mt-7" />
          <nav>
            <MenuItem to="/trash" text="Trash" iconType="trash" />
          </nav>
        </div>
        <div className="sidebar-account">
          <MyselfMenu />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
