import React from 'react';
import { connect } from 'react-redux'
import { Container, Input } from 'semantic-ui-react'


const PlantSearch = ({searchValue, searchTerm}) => (
  <Container>
    <Input onChange={searchTerm} icon='search' value={searchValue} />
 </Container>
);


const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue,
  }
}//end of state to props
//###############################################################

//###############################################################
//dispatch as props from redux store
const mapDispatchToProps = {
  searchTerm: (e)=> ({type: 'SEARCH_TERM', searchValue: e.target.value}),
}//end of dispatch to props
//###############################################################

export default connect(mapStateToProps, mapDispatchToProps)(PlantSearch);
