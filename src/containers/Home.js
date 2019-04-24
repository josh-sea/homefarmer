import React from 'react';
import Banner from '../components/Banner'
import HomeContent from './HomeContent'
import { Container } from 'semantic-ui-react'

const Home = () => (
  <Container style={style.container}>
    <Banner />
    <HomeContent />
  </Container>
);

export default Home;
//
const style = {
  container: {
    marginLeft: '0'
  }
}
