import { User } from '@auth0/auth0-react'
import { VFC } from 'react'

type ProfileProps = {
  isAuthenticated: boolean
  user: User
  theme: string
  changeTheme: (theme: string) => void
}

type AccountProps = Pick<ProfileProps, 'isAuthenticated' | 'user'>

const Account: VFC<AccountProps> = (props) => {
  const { isAuthenticated, user } = props

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="tw-card lg:tw-card-side tw-bg-base-200 tw-mb-8">
      <figure className="tw-p-6">
        <img src={user.picture} alt={user.name} className="tw-mask tw-mask-circle" />
      </figure>
      <div className="tw-card-body">
        <h2 className="tw-card-title">Account</h2>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

const Profile: VFC<ProfileProps> = (props) => {
  const { theme, changeTheme, ...accountProps } = props

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value)
  }

  return (
    <div>
      <Account {...accountProps} />
      <select className="tw-select" value={theme} onChange={handleChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="cupcake">cupcake</option>
        <option value="bumblebee">bumblebee</option>
        <option value="emerald">emerald</option>
        <option value="corporate">corporate</option>
      </select>
    </div>
  )
}

export default Profile
