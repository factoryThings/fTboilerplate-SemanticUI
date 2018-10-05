import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const Example = () => (
  <Header as="h2" textAlign="center">
    <Image src="/ftlogo.png" />
    <p>Example</p>
    <p>(Only visible when logged in.)</p>
  </Header>
)
export default Example
