import React from 'react';
import Form from 'react-bootstrap/Form'

class StatSelector extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    standardArray: [8,10,12,13,14,15]
  }
}
  render () {
    return (
      <>
        <h1>get sum STATS</h1>
        <Form>
          <Form.Group controlId='str'>
            <Form.Label>Strength</Form.Label>
            <Form.Control as="select">
              {this.state.standardArray.map(i => <option value={i}>{i}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='dex'>
          <Form.Label>Dexterity</Form.Label>
            <Form.Control as="select">
            {this.state.standardArray.map(i => <option value={i}>{i}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='con'>
          <Form.Label>Constitution</Form.Label>
            <Form.Control as="select">
            {this.state.standardArray.map(i => <option value={i}>{i}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='int'>
          <Form.Label>Intelligence</Form.Label>
            <Form.Control as="select">
            {this.state.standardArray.map(i => <option value={i}>{i}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='wis'>
          <Form.Label>Wisdom</Form.Label>
            <Form.Control as="select">
            {this.state.standardArray.map(i => <option value={i}>{i}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='cha'>
          <Form.Label>Charisma</Form.Label>
            <Form.Control as="select">
            {this.state.standardArray.map(i => <option value={i}>{i}</option>)}
            </Form.Control>
          </Form.Group>
        </Form>
      </>
    );
  }
}
    
export default StatSelector;