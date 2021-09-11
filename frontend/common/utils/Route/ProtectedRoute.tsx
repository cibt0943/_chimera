import { VFC, ComponentType } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

export const ProtectedRoute: VFC<RouteProps> = (props) => {
  const { component, ...args } = props
  return <Route component={withAuthenticationRequired(component as ComponentType, {})} {...args} />
}
