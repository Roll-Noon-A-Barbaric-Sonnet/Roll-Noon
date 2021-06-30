import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import OptionSelect from './OptionSelect';
const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
const races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];

class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        formOneData: [],
        formTwoData: [],
        showForm1: true,
        showForm2: false
    };
  };


  raceClassHandler = async (e) => {
    e.preventDefault();
    let raceChosen = e.target.characterRace.value;
    let classChosen = e.target.characterClass.value;
    let mail = await axios.get(`${process.env.REACT_APP_SERVER}/formOne?race=${raceChosen}&charClass=${classChosen}`);
    let charData = mail.data;
    let choices = []
    charData[2].forEach(choice=>{
      choices.push(<OptionSelect choiceType = {choice.type} options={choice.from}/>);
    });

    this.setState({
      formOneData: charData,
      formTwoOptions: choices,
      showForm1: false,
      showForm2: true
    });

  };
  
  render() {
    return (
      <>
        {this.state.showForm1?<Form onSubmit={this.raceClassHandler}>
          <Form.Group controlId="characterName">
            <Form.Label>Character Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your character's name" />
          </Form.Group>

          <Form.Group controlId='characterRace'>
            <Form.Label>Character Race:</Form.Label>
            <Form.Control as="select">
              <option value='0'>Choose a race</option>
              {races.map(race => <option key={race} value={race.toLowerCase()}>{race}</option>)}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="characterClass">
            <Form.Label>Character Class:</Form.Label>
            <Form.Control as="select" defaultValue="Choose your class!">
              <option>Choose One</option>
              {
                classes.map( cla =>
                  <option key={cla} value={cla.toLowerCase()}>{cla}</option>
                )
              }
            </Form.Control>
          </Form.Group>
          {/* Level Select Here! */}
          <Form.Group controlId="characterDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe your character." />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>:<></>}
        {this.state.showForm2?
        <Form>
          {this.state.formTwoOptions}
          
        </Form>
        :<></>}
        <Form>
        </Form>
      </>
    );
  };
};

export default CharacterForm;