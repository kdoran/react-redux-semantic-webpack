import React from 'react'
import { Header, Card, Dimmer, Loader, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { requestCart } from 'cart'
import DemoComponent from 'demo'
import helpers from 'helpers'

const HomePage = class extends React.Component {
  componentDidMount = () => {
    this.props.handleRequestCart()
  }

  render () {
    return (
      <div className='home-page'>
        <Dimmer active={this.props.loading}>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>
        <Header as='h2' textAlign='center'>Demo Home Page: {helpers.dateFromNow(new Date())}</Header>
        <Dimmer active={this.props.loading}>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>
        <Card.Group>
          <DemoComponent name='demo cart card' />
        </Card.Group>
        <Message hidden={!this.props.apiError}
          error
          header='Cart loading error!'
          content='Could not load card!!!'
        />
      </div>
    )
  }
}

export default connect(
  state => state.cart,
  { handleRequestCart: requestCart }
)(HomePage)
