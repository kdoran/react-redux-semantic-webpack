import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Image, Icon, Segment, Dropdown } from 'semantic-ui-react'

const SiteHeader = class extends React.Component {
  componentDidMount = () => {
    // this.props.getCurrentUser()
  }

  render () {
    const trigger = (
      <span> <Icon name='user' /> demo user </span>
    )
    return (
      <Segment className='site-header'>
        <Link to='/'>
          <Image centered src='assets/miguel.jpg' size='tiny' />
        </Link>
        <Dropdown pointing className='user-dropdown' trigger={trigger}>
          <Dropdown.Menu>
            <Dropdown.Item disabled>
              <span>Signed in as <strong>{this.props.name}</strong></span>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item onClick={this.props.logout}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Segment>
    )
  }
}

export default SiteHeader

// export default connect(
//   state => state.auth,
//   { getCurrentUser, logout }
// )(SiteHeader)
