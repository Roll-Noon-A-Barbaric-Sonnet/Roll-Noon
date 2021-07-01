import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

class CharacterDetails extends React.Component {
  render() {
    return(
      <Tabs defaultActiveKey="proficiencies" id="characterSheet">
        <Tab eventKey="proficiencies" title="Proficiencies">
          {/* skills, gear, tools */}
        </Tab>
        <Tab eventKey="equipment" title="Equipment"></Tab>
        <Tab eventKey="features" title="Features">
          <Tabs defaultActiveKey="charClass" id="feature">
            <Tab eventKey="charClass" title="Class"></Tab>
            <Tab eventKey="race" title="Racial"></Tab>
          </Tabs>
        </Tab>
      </Tabs>
    )
  }
}

export default CharacterDetails;