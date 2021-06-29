import React from 'react';
import Form from 'react-bootstrap/Form';

class RaceLanguage extends React.Component {

  render () {
    return (
      <>

        <Form.Group controlId="language">
          <Form.Label>Languages</Form.Label>
          <Form.Control as="select" defaultValue="Choose a language">
            <option>Common</option>
            <option>Infernal</option>
            <option>Dwarvish</option>
          </Form.Control>
        </Form.Group>

      </>
    );
  }
}

export default RaceLanguage;
