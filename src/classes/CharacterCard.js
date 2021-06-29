import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../css/CharacterCard.css';
class CharacterCard extends React.Component {

  render () {
    return (
      //Stretch Goal Make Classes Change Border Color maybe background color? who knows
      <Card id="blah" border={'warning'} bg={'light'} style={{ width: '500px' }}>
      <Card.Img variant="top"  src="https://via.placeholder.com/350x150" />
      <Card.Body>
        <Card.Title className='cardText'>{/*Enter Custom User Name from earlier in form*/}Character Name here</Card.Title>
        <Card.Text className='cardText'>
        Character Race Here | Character Level Here | Character Class Here
        
        </Card.Text>
        {/*Need button click handeler to go to a different page, edit, and delete?*/}
   
        <Button className="vButton" variant="primary">View</Button>{' '}
        <Button className="edButtons" variant="success">Edit</Button>{' '}
        <Button className="edButtons" variant="danger">Delete</Button>{' '}
        
      </Card.Body>
    </Card>
  
    )} 
}
    
export default CharacterCard;