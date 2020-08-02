import React from 'react'
import { Container, Divider, List, Segment } from 'semantic-ui-react'

const Footer: React.FC = () => {
  return (
    <Segment inverted={true} vertical={true}>
      <Container textAlign="center">
        <Divider inverted={true} section={true} />
        <List horizontal={true} inverted={true} divided={true} link={true} size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}

export default Footer
