import React from 'react';
import { Header, Image } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <Header as="h2" textAlign="center">
        <Image src="/ftlogo.png" />
        <p>Home</p>
      </Header>
    );
  }
}

export default Home;
