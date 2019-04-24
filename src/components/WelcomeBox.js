import React from 'react';
import { Container, Header, Segment, Button, Grid } from 'semantic-ui-react'


const WelcomeBox = () => (
        <Segment style={style.welcomeBox}>
          <Header  as='h2'> Welcome to HomeFarmer </Header>
          <Header  as='h4'> Join the open source community building sustainable farms in their homes </Header>
          <Button style={{width:'50%', marginLeft: '25%'}}>Get Started</Button>
        </Segment>
);

export default WelcomeBox;

const style ={
 welcomeBox: {
   minWidth: '20em'
 }
}
