import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import Community from './containers/Community'
import Code from './containers/Code'
import Data from './containers/Data'
// const BASEURL = 'https://homefarmer-back.herokuapp.com/'
const BASEURL = 'http://localhost:9000/'

class App extends Component {

  componentDidMount() {
    fetch(`${BASEURL}api/v1/plants`)
    .then(r=>r.json())
    .then(plants=>{
      this.props.getPlants(plants)
    })
  }

  render() {

    return (
      <Router>
        <Navigation />
        <Route
          exact path='/'
          render={()=>{
            return <Home />
          }}
        />
        <Route
          exact path='/community'
          render={()=>{
            return <Community />
          }}
        />
        <Route
          exact path='/code'
          render={()=>{
            return <Code />
          }}
        />
        <Route
          exact path='/data'
          render={()=>{
            return <Data />
          }}
        />
      </Router>
    );
  }
}



//###############################################################
const mapStateToProps = (state) => {
  return {
    life: state.meaning,
  }
}//end of state to props
//###############################################################

//###############################################################
//dispatch as props from redux store
const mapDispatchToProps = {
  testing: ()=> ({type: 'TEST', hey: 'hi from reducer'}),
  getPlants: (plants) => ({type: 'PLANT_DATA', plants})

}//end of dispatch to props
//###############################################################

export default connect(mapStateToProps, mapDispatchToProps)(App);
