import React from 'react';
import { Header, Segment, Button } from 'semantic-ui-react'


const WelcomeBox = () => (
  <>
    <Segment style={{width: '30vw', justifyContent: 'center', alignItems: 'center', padding: '5%'}}>
      <Header  as='h2'> Welcome to HomeFarmer </Header>
      <Header  as='h4'> Join the open source community building sustainable farms in their homes </Header>
      <Button style={{width:'50%', marginLeft: '25%'}}>Get Started</Button>
    </Segment>
  </>
);

export default WelcomeBox;
