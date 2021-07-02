import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import OptionSelect from './OptionSelect';
import RadioStats from './RadioStats.js';
import '../css/index.css';
import { withAuth0 } from '@auth0/auth0-react';
import '../css/Form.css';

const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
const races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];

class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOneData: [],
      formTwoData: [],
      showForm1: true,
      showForm2: false,
      showForm3: false,
      numOfOptions: 0,
      form2Result: [],
      form3Result: []    
    };
  };

  //take race and class, get base data and options from server,
  //then format all of it and prep options for form2 
  raceClassHandler = async (e) => {
    e.preventDefault();
    let characterName = e.target.characterName.value;
    let raceChosen = e.target.characterRace.value;
    let classChosen = e.target.characterClass.value;
    let description = e.target.characterDescription.value;
    let mail = await axios.get(`${process.env.REACT_APP_SERVER}/formOne?race=${raceChosen}&charClass=${classChosen}`);
    let charData = mail.data;
    charData[4] = [characterName,raceChosen,classChosen,description];
    let choices = []
    charData[2].forEach(choice => {
      choices.push(<OptionSelect index={charData[2].indexOf(choice)} choiceType={choice.type} options={choice.from} />);
    });
    this.setState({
      charHeader: charData[4],
      formOneData: charData,
      formTwoOptions: choices,
      showForm1: false,
      showForm2: true,
      numOfOptions: charData[2].length
    });
  };

  formTwoSubmit = async (e) => {
    e.preventDefault();
    let charData = this.state.formOneData;
    let choiceData = [];
    //loop through each selectbox and add values to array by pulling from original option lists
    for (let i = 0; i < this.state.numOfOptions; i++) {
      choiceData.push(charData[2][i].from[e.target[i].value]);
    }
    charData[3] = choiceData;
    this.setState({
      showForm1: false,
      showForm2: false,
      showForm3: true,
      form2Result: charData 
    })
  }

  formThreeComplete = async (stats,profs) => {
    let charData = this.state.form2Result;
    charData[3] = [...charData[3],...profs];
    charData.push(stats);
    console.log(charData);
    let config = await this.props.config();
    console.log('config:',config);
    let responseData = await axios.post(`${process.env.REACT_APP_SERVER}/add`, charData, config);
    console.log(responseData.data);
  } 

  render() {
    return (
      <>
        {this.state.charHeader?<h2 id='chosenName'>{`${this.state.charHeader[0]}, ${this.state.charHeader[1]} ${this.state.charHeader[2]}`}</h2>:<></>}
        {this.state.showForm1 ? <Form onSubmit={this.raceClassHandler}>
          <Form.Group controlId="characterName">
            <Form.Label className='formLabel'>Character Name:</Form.Label>
            <Form.Control className='formControl' type="text" placeholder="Enter your character's name" />
          </Form.Group>

          <Form.Group controlId='characterRace'>
            <Form.Label className='formLabel'>Character Race:</Form.Label>
            <Form.Control className='formControl' as="select">
              <option value='0'>Choose a race</option>
              {races.map(race => <option key={race} value={race.toLowerCase()}>{race}</option>)}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="characterClass">
            <Form.Label className='formLabel'>Character Class:</Form.Label>
            <Form.Control className='formControl' as="select" defaultValue="Choose your class!">
              <option>Choose One</option>
              {
                classes.map(cla =>
                  <option key={cla} value={cla.toLowerCase()}>{cla}</option>
                )
              }
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="characterDescription">
            <Form.Label className='formLabel'>Description:</Form.Label>
            <Form.Control className='formControl' as="textarea" rows={3} placeholder="Describe your character." />
          </Form.Group>
          <Button className='formOneButton' type='submit'>Submit</Button>
        </Form> : <></>}
        {this.state.showForm2 ?
          <Form onSubmit={this.formTwoSubmit}>
            {this.state.formTwoOptions}
            <Button className='formOneButton' type='submit'>Next</Button>
          </Form>
          : <></>}
        {this.state.showForm3?<RadioStats finish={this.formThreeComplete}/>:<></>}
      </>
    );
  };
};

export default withAuth0(CharacterForm);
