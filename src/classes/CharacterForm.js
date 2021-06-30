import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

  raceClassHandler = async (e) => {
    e.preventDefault();
    console.log(e.target);
    // raceChosen = e.target.characterRace.value;
    // classChosen = e.target.characterClass.value;
    // let mail = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/formone?race=${raceChosen}&charclass=${classChosen}`);
    // let charData = mail.data;

  }
  
  render() {
    return (
      <>
        <Form onSubmit={this.raceClassHandler}>
          <Form.Group controlId="characterName">
            <Form.Label>Character Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your character's name" />
          </Form.Group>

          <Form.Group controlId='characterRace'>
            <Form.Label>Character Race</Form.Label>
            <Form.Control as="select">
              <option value='0'>Choose a race</option>
              {races.map(race => <option key={race} value={race.toLowerCase()}>{race}</option>)}
            </Form.Control>
          </Form.Group>

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
          <Button type='submit'>Submit</Button>
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