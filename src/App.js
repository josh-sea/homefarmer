import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import Community from './containers/Community'
import Code from './containers/Code'

class App extends Component {


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
  testing: ()=> ({type: 'TEST', hey: 'hi from reducer'})
}//end of dispatch to props
//###############################################################

export default connect(mapStateToProps, mapDispatchToProps)(App);
