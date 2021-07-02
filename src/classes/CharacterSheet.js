import React from 'react';
import CharacterDetails from './CharacterDetails';
import '../css/CharacterMenu.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from 'react-bootstrap/Card'
//proficiencies, equipment, features, spellcasting
class CharacterSheet extends React.Component {
  render() {
    return (
      <Router>

       
        <div id = 'cardContainer'>
          <Card id="nameCard">
            <Card.Title>
              <div id="cardtitle"> 
              <h3 id="h3CharName">{`Name: tacobell`}</h3>
              </div>
            </Card.Title>
            <Card.Body class="blah">
              <div id='cardbody1'>
                <h6>{`Race: Human`}</h6>
                <h6>{`Class: Wizard`}</h6>
                </div>

            </Card.Body>
          </Card>
          <Card id="nameCard">
            <Card.Title>
              <div id="healthCardTitle"> 
              <h3 class="armorSpeed">{`Health: #`}</h3>
              </div>
            </Card.Title>
            <Card.Body class="cardbody2">
            <span class="armorSpeed">{`Armor: #`}</span><span class="armorSpeed">{`Speed: #`}</span>

            </Card.Body>
          </Card>
          </div>
        
        <Link to="/onePanel" >One Panel</Link>
        <Link to="/twoPanel" >Two Panel</Link>
        <Switch>
          <Route path='/onePanel'>
            <CharacterDetails />
          </Route>
          <Route path='/twoPanel'>
            <div id="TwoTwoPanel">
              <CharacterDetails />
              <CharacterDetails />
            </div>
          </Route>

        </Switch>
      </Router>

    );
  }
}

export default CharacterSheet;