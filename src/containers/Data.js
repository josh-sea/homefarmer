import React from 'react';
import  { Container, Segment, Header, Grid } from 'semantic-ui-react'
import PlantTable from '../components/PlantTable'
import PlantSearch from '../components/PlantSearch'


const Data = () => (
  <Container>
    <Segment style={{marginTop:'10px'}}>
      <Header as='h4'>Search!</Header>
      <Grid columns={3} stackable>
        <Grid.Column>
          <Header as='h6'>Name:</Header>
          <PlantSearch />
        </Grid.Column>
        <Grid.Column>
          <Header as='h6'>pH:</Header>
          <PlantSearch />
        </Grid.Column>
        <Grid.Column>
          <Header as='h6'>EC:</Header>
          <PlantSearch />
        </Grid.Column>
      </Grid>
    </Segment>

    <div style={{height: '70vh', overflowY: 'scroll'}}>
      <PlantTable />
    </div>

  </Container>
);

export default Data;
