import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

let skills = ['-Skills-', 'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'];
let languages = ['-Languages-', 'Abyssal', 'Celestial', 'Common', 'Deep Speech', 'Draconic', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Infernal', 'Orc', 'Primordial', 'Sylvan','Undercommon'];
let tools = ['-Tools & Languages-', 'Alchemist\'s Supplies', 'Brewer\'s Supplies', 'Calligrapher\'s Supplies', 'Carpenter\'s Tools', 'Cobbler\'s Tools', 'Cook\'s Utensils', 'Disguise Kit', 'Forgery Kit', 'Glassblower\'s Tools', 'Herbalism Kit', 'Jeweler\'s Tools', 'Land Vehicles', 'Leatherworker\'s Tools', 'Mason\'s Tools', 'Navigator\'s Tools', 'Painter\'s Supplies', 'Poisoner\'s Kit', 'Potter\'s Tools', 'Smith\'s Tools', 'Thieves\' Tools', 'Tinker\'s Tools', 'Water Vehicles', 'Weaver\'s Tools', 'Woodcarver\'s Tools'];

class BackgroundForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  submitProfs = e => {
    e.preventDefault();
    let skillOne=e.target.skillOne.value;
    let skillTwo=e.target.skillTwo.value;
    let toolOne=e.target.toolOne.value;
    let toolTwo=e.target.toolTwo.value;
    this.setState({skillOne, skillTwo, toolOne, toolTwo})
  }

  render () {
    return (
      //choose 2 from: proficiencies, languages, tools, 
      <Form onSubmit={this.submitProfs}>
          <Form.Group controlId="skillOne">
            <Form.Control as="select">
              {skills.map(choice => <option value={choice}>{choice}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="skillTwo">
            <Form.Control as="select">
              {skills.map(choice => <option value={choice}>{choice}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="toolOne">
          <Form.Control as="select">
            {[...tools,...languages].map(choice => <option value={choice}>{choice}</option>)}
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="toolTwo">
          <Form.Control as="select">
            {[...tools,...languages].map(choice => <option value={choice}>{choice}</option>)}
          </Form.Control>
          </Form.Group>
          <Button type="submit">CLICK THIS</Button>
      </Form>
    );
  }
}
    
export default BackgroundForm;