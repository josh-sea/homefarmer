import React from 'react';
import { connect } from 'react-redux'
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navigation = ({handleNavCLick, activeItem}) => (
  <Menu style={{margin:'0', borderRadius: '0'}} inverted>
   <Link to='/'>
     <Menu.Item
      id='Home'
      active={activeItem === 'Home'}
      onClick={handleNavCLick}
     >
      <Header as='h3' inverted>Home</Header>
    </Menu.Item>
   </Link>
   <Link to='/community'>
     <Menu.Item
      id='Community'
      active={activeItem === 'Community'}
      onClick={handleNavCLick}
     >
      <Header as='h3' inverted>Community</Header>
     </Menu.Item>
    </Link>
    <Link to='/data'>
      <Menu.Item
       id='Data'
       active={activeItem === 'Data'}
       onClick={handleNavCLick}
      >
        <Header as='h3' inverted>Data</Header>
     </Menu.Item>
    </Link>
    <Link to='/Code'>
     <Menu.Item
      id='Code'
      active={activeItem === 'Code'}
      onClick={handleNavCLick}
     >
      <Header as='h3' inverted>Code</Header>
     </Menu.Item>
    </Link>


    <Menu.Menu position='right'>
      <Link to='/Login'>
          <Menu.Item
            style={{width: '10vw',display: 'flex', alignItems: 'center',justifyContent: 'center'}}
            id='Login'
            active={activeItem === 'Login'}
            onClick={handleNavCLick}
         >
          <Header as='h3' inverted>Login</Header>
         </Menu.Item>
       </Link>

     </Menu.Menu>
  </Menu>
);

//###############################################################
const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
  }
}//end of state to props
//###############################################################

//###############################################################
//dispatch as props from redux store
const mapDispatchToProps = {
  handleNavCLick: (e) => ({type: 'NAV_CLICK', newNavItem: e.target.id})
}//end of dispatch to props
//###############################################################

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
