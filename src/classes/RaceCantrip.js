import React from 'react';
import Form from 'react-bootstrap/Form';

class RaceCantrip extends React.Component {

  render () {
    return (
      <>

        <Form.Group controlId="cantrip">
          <Form.Label>Cantrips</Form.Label>
          <Form.Control as="select" defaultValue="Choose a cantrip">
            <option>Cantrip</option>
            <option>Cantrip</option>
            <option>Cantrip</option>
          </Form.Control>
        </Form.Group>

      </>
    );
  }
}

export default RaceCantrip;
