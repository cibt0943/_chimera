import { VFC } from 'react'

type Props = {
  theme: string
  setTheme: (theme: string) => void
}

const Profile: VFC<Props> = (props) => {
  const { theme, setTheme } = props

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value)
  }

  return (
    <select className="tw-select" value={theme} onChange={handleChange}>
      <option value="light">light</option>
      <option value="dark">dark</option>
      <option value="cupcake">cupcake</option>
      <option value="bumblebee">bumblebee</option>
      <option value="emerald">emerald</option>
      <option value="corporate">corporate</option>
    </select>
  )
}

export default Profile
