import React from 'react';

import Form from 'react-bootstrap/Form';
import RaceAbilityScore from './RaceAbilityScore';
import RaceProficiency from './RaceProficiency';
import RaceLanguage from './RaceLanguage';
import RaceCantrip from './RaceCantrip';
import axios from 'axios';

// import Button from 'react-bootstrap/buttons';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Popover from 'react-bootstrap/Popover';
// import Header from './Header.js';
// import Footer from './Footer.js';

const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];

const races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];



class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        raceChosen: '',
        classChosen: '',

        showFeature: '',

        showRaceAbilityScore: '',
        showRaceProficiency: '',
        showRaceLanguage:'',
        showRaceCantrip:'',

        form2: false,
    }
  }

  // let charData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/formone?race=${raceChosen}&charclass=${classChosen}`);


  raceHandler = (race) => {
    this.setState({
      raceChosen: race
    })
  } 

  classHandler = (clas) => {
    this.setState({
      classChosen: clas
    })
  }

  charRaceOnChange = (e) => {
    e.preventDefault();
    let chosenR = e.target.value;
    console.log(chosenR);
    this.raceHandler(chosenR);
  }

  charClassOnChange = (e) => {
    e.preventDefault();
    let chosenC = e.target.value;
    console.log(chosenC);
    this.classHandler(chosenC);
  }

  

  render() {
    return (
      <>
        {//This is the start of the Character Creation Form With many modifiers.
        }
        <Form>
          <Form.Group controlId="characterName">
            <Form.Control type="text" placeholder="Enter your character's name" />
          </Form.Group>

          <Form.Group controlId='characterRace'>
            <Form.Control as="select" onChange={this.charRaceOnChange} >
              <option value='0'>Choose a race</option>
              {
                races.map( race => 
                  <option key={race} value={race.toLowerCase()}>{race}</option>
                )
              }
            </Form.Control>
          </Form.Group>

        {
          this.state.showRaceAbilityScore ?
          <RaceAbilityScore /> : ''
        }

        {
          this.state.showRaceProficiency ?
          <RaceProficiency /> : ''
        }

        {
          this.state.showRaceLanguage ?
          <RaceLanguage /> : ''
        }

        {
          this.state.showRaceCantrip ?
          <RaceCantrip /> : ''
        }

        </Form>

        <Form>

          <Form.Group controlId="characterClass">
            <Form.Label>Character Class</Form.Label>
            <Form.Control as="select" defaultValue="Choose your class!">
              <option>Choose One</option>
              {
                classes.map( cla =>
                  <option key={cla} value={cla.toLowerCase()}>{cla}</option>
                )
              }
            </Form.Control>
          </Form.Group>

        </Form>

        <Form>

          <Form.Group controlId="characterDescription">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe your character." />
          </Form.Group>

          <Form.Group controlId="background">
            <Form.Label>Character Background</Form.Label>
            <Form.Control as="select" defaultValue="Choose you background">
              <option>Background</option>
              <option>Background</option>
              <option>Background</option>
              <option>Background</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="feature">
            <Form.Label>Character Feature</Form.Label>
            <Form.Control as="select" defaultValue="Choose you Feature">
              <option>Feature</option>
              <option>Feature</option>
              <option>Feature</option>
              <option>Feature</option>
            </Form.Control>
          </Form.Group>

        </Form>
  
      </>
    );
  }
}

export default CharacterForm;