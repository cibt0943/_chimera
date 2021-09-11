import { VFC, MouseEvent, Fragment } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Menu } from '@headlessui/react'

export const MyselfMenu: VFC = () => {
  const { isAuthenticated, user, logout } = useAuth0()

  if (!isAuthenticated) return null

  const handleOnClickLogout = (event: MouseEvent<HTMLElement>) => {
    event?.preventDefault()
    logout({ returnTo: window.location.origin })
  }

  return (
    <Menu as="div" className="tw-dropdown tw-dropdown-open tw-dropdown-top">
      <Menu.Button as={Fragment}>
        <div className="tw-avatar tw-cursor-pointer">
          <div className="tw-rounded-full tw-w-14 tw-h-14">
            <img src={user?.picture} />
          </div>
        </div>
      </Menu.Button>
      <Menu.Items as="ul" className="tw-dropdown-content tw-menu tw-p-2 tw-shadow-lg tw-bg-base-100 tw-rounded-lg tw-whitespace-nowrap">
        <Menu.Item as="li">
          <div className="tw-avatar tw-px-4 tw-py-3 tw-items-center">
            <div className="tw-rounded-full tw-w-8 tw-h-8">
              <img src={user?.picture} />
            </div>
            <div className="tw-ml-2">{user?.name}</div>
          </div>
        </Menu.Item>
        <Menu.Item as="li">
          <RouterLink to="/settings/account">Account Settings</RouterLink>
        </Menu.Item>
        <Menu.Item as="li">
          <a onClick={handleOnClickLogout}>Log out</a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
