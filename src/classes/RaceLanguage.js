import React from 'react';
import Form from 'react-bootstrap/Form';

class RaceLanguage extends React.Component {

  render () {
    return (
      <>

        <Form.Group controlId="cantrip">
          <Form.Label>Character Race</Form.Label>
          <Form.Control as="select" defaultValue="Increase an Ability">
            <option>Cantrip</option>
            <option>Cantrip</option>
            <option>Cantrip</option>
          </Form.Control>
        </Form.Group>

      </>
    );
  }
}

export default RaceLanguage;
