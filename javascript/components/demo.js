import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default class extends React.Component {
  render () {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>meta</Card.Meta>
          <Card.Description>
            desc
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='user' />
          footer
        </Card.Content>
      </Card>
    )
  }
}
