import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../css/CharacterCard.css';
import Form from 'react-bootstrap/Form'

class CharacterCard extends React.Component {

  render() {
    return (

      //Css for character card position is in the index.css

      //Stretch Goal Make Classes Change Border Color maybe background color? who knows

      <Card id="blah" border={'warning'} bg={'light'} style={{ width: '500px' }}>
        <Card.Img variant="top" src="" />

        <Card.Body>
         
          <Card.Title className='cardText'>{/*Enter Custom User Name from earlier in form*/}Character Name here</Card.Title>
          <Card.Text className='cardText'>
            Character Race Here | Character Level Here | Character Class Here

          </Card.Text>
          {/*Need button click handeler to go to a different page, edit, and delete?*/}

          <div id="vedbuttonsOuter">
            <button class='vedbutton' class="btn-outline primary"><i class="fas fa-exclamation-circle"></i><span class="span">View</span></button>

            <button class='vedbutton' class="btn-outline success"><i class="fas fa-edit"></i><span class="span">Edit</span></button>
            <button class='vedbutton' class="btn-outline danger"><i class="fas fa-times-circle"></i><span class="span">Delete</span></button>

          </div>
         {//Upload Character Image
          }
          <br/>
          <Form>
            <Form.Group>
              <Form.File id="characterPic" label="Upload Your Character's Picture" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      

    )
  }
}

export default CharacterCard;