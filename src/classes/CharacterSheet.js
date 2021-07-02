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
        <div id='cardContainer'>
          <Card id="nameCard">
            <Card.Title>
              <div id="cardtitle">
                {/* <h3 id="h3CharName">{this.data.name}</h3> */}
              </div>
            </Card.Title>
            <Card.Body id="nameCardBody">
              <div id='cardbody1'>
                {/* <h6>{this.data.race}</h6>
                <h6>{this.data.class}</h6> */}
              </div>
            </Card.Body>
          </Card>

          <Card id="hpCard">
            <Card.Title>
              <div id="hpCardTitle">
                {/* <h3 class="hitPoints">{this.data.hitPoints}</h3> */}
              </div>
            </Card.Title>
            <Card.Body class="hpCardBody">
              <span class="armorSpeed">
                {/* {this.data.armor} */}
              </span>
              <span class="armorSpeed">
                {/* {this.data.speed} */}
              </span>
            </Card.Body>
          </Card>
        </div>
        <div id="linkContainer">
          <Link id='panelLink1' to="/onePanel" >Panel 1</Link>
          <Link id='panelLink2' to="/twoPanel" >Panel 2</Link>
        </div>
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