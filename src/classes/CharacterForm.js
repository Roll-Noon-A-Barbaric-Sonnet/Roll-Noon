import React from 'react';
import Form from 'react-bootstrap/Form'
import CharacterCard from './CharacterCard.js';
// import Button from 'react-bootstrap/buttons';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Popover from 'react-bootstrap/Popover';
// import Header from './Header.js';
// import Footer from './Footer.js';
class CharacterForm extends React.Component {

  render() {
    return (
      <>
      {//This is the start of the Character Creation Form With many modifiers.
      }
        <Form>
          <Form.Group controlID="characterName">
            <Form.Control type="text" placeholder="Enter your character's name" />
          </Form.Group>

          <Form.Group controlId="characterClass">
            <Form.Label>Character Class</Form.Label>
            <Form.Control as="select" defaultValue="Choose your class!">
              <option>Class1</option>
              <option>Class2</option>
              <option>Class3</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="characterClass">
            <Form.Label>Character Race</Form.Label>
            <Form.Control as="select" defaultValue="Choose your race!">
              <option>Race1</option>
              <option>Race2</option>
              <option>Race3</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="characterInformation">
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

          <Form.Group controlId="background">
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