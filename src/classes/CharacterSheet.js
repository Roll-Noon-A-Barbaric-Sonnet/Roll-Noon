import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CharacterDetails from './CharacterDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//proficiencies, equipment, features, spellcasting
class CharacterSheet extends React.Component {
  render() {
    return(
      <Router>
        <h4>Important Character Details, health, AC, etc.</h4>
        <Link to="/onePanel" >One Panel</Link>
        <Link to="/twoPanel" >Two Panel</Link>
        <Switch>
          <Route path='/onePanel'>
            <CharacterDetails />
          </Route>
          <Route path='/twoPanel'>
            <CharacterDetails />
            <CharacterDetails />
          </Route>

        </Switch>
      </Router>

    );
  }
}

export default CharacterSheet;