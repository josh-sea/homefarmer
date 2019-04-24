import React from 'react';
import { Container, Header } from 'semantic-ui-react'

const HomeContent = () => (
  <Container style={{display: 'flex'}}>
    <Container style={{padding: '5%'}}>
      <Header as='h4'>Leading the open source community to a sustainable agricultural future</Header>
      <p>Currently, sustainable agriculture is something readily achievable and within reach of most individuals. It is relatively simple to grow and manage all the greens you and your family need using minimal power and water.</p>
      <p>While achievable, a slight learning curve keeps decentralized, at-home farming out of reach for far too many. This community aims to solve this issue by collecting data in a central and easily accesible API, providing open source software and hardware, and a vibrant community of growers looking to help each other simplify the technology and simplify at home food growing.</p>
    </Container>
    <Container style={{padding: '5%'}}>
      <Header as='h4'>Centralizing Data</Header>
      <p>Finding data for plants is a mess. There are so many resources out there but limited projects combining it all together.</p>
      <p>One of the driving factors behind this project was to create a centralized plant growing repository that could be easily viewed and accessed to empower more people to create agricultural projects. I believe by collecting data and making it easily accessible to amazing makers and creators, we can start a new age of decentrlaized farming that is productive and sustainable.</p>
    </Container>
  </Container>
);

export default HomeContent;
