import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Header, Image } from 'antd'

export default class Signout extends React.Component {
  render () {
    Meteor.logout()
    return (
      <Header as="h2" textAlign="center">
        <Image src="/ftlogo.png" />
          <p>Signout</p>
      </Header>
    )
  }
}
