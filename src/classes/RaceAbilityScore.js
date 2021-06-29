import React from 'react';
import Form from 'react-bootstrap/Form';

class RaceAbilityScore extends React.Component {

  render() {
    return (
      <>

        <Form.Group controlId="abilityScore">
          <Form.Label>Character Race</Form.Label>
          <Form.Control as="select" defaultValue="Increase an Ability">
            <option>Ability</option>
            <option>Ability</option>
            <option>Ability</option>
          </Form.Control>
        </Form.Group>

      </>
    );
  }
}

export default RaceAbilityScore;