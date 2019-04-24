import React from 'react';
import { Header, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'


const filterPlants = (searchValue, plantData) => {
     return plantData.filter(plant=>{
      const reg = new RegExp(searchValue,'gi')
      return reg.test(plant.name)
    })
  }
const  PlantTable = ({searchValue, plantData}) => (
  <Table celled padded>
      <Table.Header>
        <Table.Row style={{textAlign: 'center'}}>
          <Table.HeaderCell singleLine>Plant Name</Table.HeaderCell>
          <Table.HeaderCell singleLine>Avg. pH</Table.HeaderCell>
          <Table.HeaderCell singleLine>Avg. EC mS</Table.HeaderCell>
          <Table.HeaderCell singleLine>Plant Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {

       filterPlants(searchValue,plantData).map(plant=>{
        return <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h3' singleLine textAlign='center'>
                {plant.name}
              </Header>
            </Table.Cell>
            <Table.Cell singleLine textAlign='center'>
              {plant.pH}
            </Table.Cell>
            <Table.Cell singleLine textAlign='center'>
              {plant.ec}
            </Table.Cell>
            <Table.Cell>
              {plant.plant_notes}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      })
    }
    </Table>
  );

  const mapStateToProps = (state) => {
    return {
      plantData: state.plantData,
      searchValue: state.searchValue
    }
  }//end of state to props
  //###############################################################

  //###############################################################
  //dispatch as props from redux store
  const mapDispatchToProps = {
  }//end of dispatch to props
  //###############################################################

  export default connect(mapStateToProps, mapDispatchToProps)(PlantTable);
