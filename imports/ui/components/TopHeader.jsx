import React from 'react'
import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor'
import { withRouter, NavLink } from 'react-router-dom'
import { Menu, Dropdown } from 'antd'

class TopHeader extends React.Component {
  render () {
    console.log(this)
    return (
      <Menu>
        <Menu.Item>Home</Menu.Item>
          <Menu.Item>Example</Menu.Item>
            <Menu.Item>Sign In</Menu.Item>
              <Menu.Item>Sign Up</Menu.Item>
                <Menu.Item>Not Found Page</Menu.Item>
                  <Menu.Item>
                    {this.props.currentUser === '' ? (
                      <Dropdown text="Please Sign In">
                        <Dropdown.Menu>
                          <Dropdown.Item icon="user" text="Sign In" />
                            <Dropdown.Item icon="add user" text="Sign Up" />
                        </Dropdown.Menu>
                      </Dropdown>
          ) : (
            <Dropdown
              text={this.props.currentUser}
              pointing="top right"
              icon="user"
            >
              <Dropdown.Menu>
                <Dropdown.Item icon="user" text="Account" />
                  <Dropdown.Item icon="settings" text="Settings" />
                    <Dropdown.Item icon="sign out" text="Sign Out" />
              </Dropdown.Menu>
            </Dropdown>
          )}
                  </Menu.Item>
      </Menu>
    )
  }
}

TopHeader.propTypes = {
  currentUser: PropTypes.string,
}
