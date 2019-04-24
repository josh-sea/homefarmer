import React from 'react';
import  { Container, Segment, Header } from 'semantic-ui-react'
import PlantTable from '../components/PlantTable'
import PlantSearch from '../components/PlantSearch'


const Data = () => (
  <Container>
    <Segment style={{marginTop:'10px'}}>
      <Header as='h4'>Filter!</Header>
      <PlantSearch />
    </Segment>

    <Segment style={{height: '70vh', overflow: 'scroll'}}>
      <PlantTable />
    </Segment>

  </Container>
);

export default Data;
