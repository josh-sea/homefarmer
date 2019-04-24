import React from 'react';
import  { Container, Segment, Header } from 'semantic-ui-react'
import PlantTable from '../components/PlantTable'


const Data = () => (
  <Container>
    <Segment style={{marginTop:'10px'}}>
      <Header as='h2'>Find Plants!</Header>
    </Segment>

    <Segment>
      <PlantTable />
    </Segment>

  </Container>
);

export default Data;
