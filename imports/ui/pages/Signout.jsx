import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Header, Image } from 'semantic-ui-react'

const Signout = () => {
  Meteor.logout()
  return (
    <Header as="h2" textAlign="center">
      <Image src="/ftlogo.png" />
      <p>Signout</p>
    </Header>
  )
}

export default Signout
