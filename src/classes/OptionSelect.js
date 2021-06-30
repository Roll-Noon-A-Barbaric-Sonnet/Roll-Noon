import React from 'react';
import Form from 'react-bootstrap/Form';

class OptionSelect extends React.Component {

  render() {
    console.log(this.props.options);
    return (
        <Form.Group controlId={this.props.index}>
          <Form.Label>{this.props.choiceType}</Form.Label>
          <Form.Control as="select" defaultValue={`Choose ${this.props.choiceType}`}>
            {this.props.options.map(option => {
              if(option.equipment){
                return <option value={option} key={option.equipment.index}>{option.equipment.name}</option>               
              } else {
                return <option value={option} key={option.index}>{option.name}</option>
              };
            })}
          </Form.Control>
        </Form.Group>
    );
  }
}

export default OptionSelect;