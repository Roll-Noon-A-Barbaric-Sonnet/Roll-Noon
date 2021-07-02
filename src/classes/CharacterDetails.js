import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

class CharacterDetails extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="proficiencies" id="characterSheet">

        <Tab eventKey="proficiencies" title="Proficiencies">
          {
            // this.props.charData.map( data => 
            //   <h2>{this.data.proficiencies}</h2>
            //   )
          }
        </Tab>

        <Tab eventKey="equipment" title="Equipment">
          {
            // this.props.charData.map( data => 
            //   <h2>{this.data.equipment}</h2>
            //   )
          }
        </Tab>

        <Tab eventKey="features" title="Features">
          <Tabs defaultActiveKey="charClass" id="feature">
            <Tab eventKey="charClass" title="Class">

            </Tab>
            <Tab eventKey="race" title="Racial">

            </Tab>
          </Tabs>

        </Tab>
      </Tabs>
    )
  }
}

export default CharacterDetails;