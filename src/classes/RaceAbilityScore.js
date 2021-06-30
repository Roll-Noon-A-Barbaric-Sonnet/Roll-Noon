import React from 'react';
import Form from 'react-bootstrap/Form';

class optionSelect extends React.Component {

  render() {
    return (
      <>

        <Form.Group controlId={this.props.index}>
          <Form.Label>{this.props.choiceType}</Form.Label>
          <Form.Control as="select" defaultValue={`Choose ${this.props.choiceType}`}>
            {this.props.options.map(option =>{
              <option value={option.index} key={option.index}>{option.name}</option>
            })}
          </Form.Control>
        </Form.Group>

      </>
    );
  }
}

export default optionSelect;