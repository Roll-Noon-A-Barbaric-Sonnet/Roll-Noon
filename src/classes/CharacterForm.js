import React from 'react';

import Form from 'react-bootstrap/Form';
import RaceAbilityScore from './RaceAbilityScore';
import RaceProficiency from './RaceProficiency';
import RaceLanguage from './RaceLanguage';
import RaceCantrip from './RaceCantrip';

// import Button from 'react-bootstrap/buttons';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Popover from 'react-bootstrap/Popover';
// import Header from './Header.js';
// import Footer from './Footer.js';


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
    }
  }

  raceHandler = (race) => {
    this.setState({
      raceChosen: race
    })
  } 

  clasHandler = (clas) => {
    this.setState({
      classChosen: clas
    })
  }

  render() {
    return (
      <>
        {//This is the start of the Character Creation Form With many modifiers.
        }
        <Form>
          <Form.Group controlID="characterName">
            <Form.Control type="text" placeholder="Enter your character's name" />
          </Form.Group>

          <Form.Group controlId="characterRace">
            <Form.Label>Character Race</Form.Label>
            <Form.Control as="select" defaultValue="Choose your race!">
              <option>Race1</option>
              <option>Race2</option>
              <option>Race3</option>
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
              <option>Class1</option>
              <option>Class2</option>
              <option>Class3</option>
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