import React from 'react';
import Form from 'react-bootstrap/Form';

class RaceProficiency extends React.Component {

  render () {
    return (
      <>

        <Form.Group controlId="proficiency">
          <Form.Label>Proficiencies</Form.Label>
          <Form.Control as="select" defaultValue="Increase an Ability">
            <option>Pro</option>
            <option>Pro</option>
            <option>Pro</option>
          </Form.Control>
        </Form.Group>

      </>
    );
  }
}

export default RaceProficiency;
