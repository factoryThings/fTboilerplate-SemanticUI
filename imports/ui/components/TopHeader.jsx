import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class TopHeader extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink activeClassName="active" to="/example">
            Example
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink activeClassName="active" to="/signin">
            Signin
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink activeClassName="active" to="/signup">
            Signup
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink activeClassName="active" to="/logout">
            Logout
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/bad-url">Not Found Page</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}
// <NavLink> = <Link> that with added  styling when it matches the current URL
