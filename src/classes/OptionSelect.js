import React from 'react';
import Form from 'react-bootstrap/Form';

class OptionSelect extends React.Component {

  render() {
    console.log(this.props.options);
    return (
        <Form.Group controlId={this.props.index}>
          <Form.Label>{this.props.choiceType}</Form.Label>
          <Form.Control as="select" defaultValue={`Choose ${this.props.choiceType}`}>
            {this.props.options.map((option,idx) => {
              if(option.equipment){
                return <option value={idx} key={option.equipment.index}>{option.equipment.name}</option>               
              } else if (option.ability_score) {
                return <option value={idx} key={option.ability_score.index}>{option.ability_score.name}</option>
              } else {
                return <option value={idx} key={option.index}>{option.name}</option>
              };
            })}
          </Form.Control>
        </Form.Group>
    );
  }
}

export default OptionSelect;