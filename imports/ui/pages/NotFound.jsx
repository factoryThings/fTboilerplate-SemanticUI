import React from 'react';
import { Header, Image } from 'semantic-ui-react';

class NotFound extends React.Component {
  render() {
    return (
      <Header as="h2" textAlign="center">
        <Image src="/ftlogo.png" /> Page not found
      </Header>
    );
  }
}

export default NotFound;
