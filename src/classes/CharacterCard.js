import React from 'react';
import Card from 'react-bootstrap/Card'
import '../css/CharacterCard.css';
import axios from 'axios';



class CharacterCard extends React.Component {
  render() {
    return (

      //Css for character card position is in the index.css

      //Stretch Goal Make Classes Change Border Color maybe background color? who knows
      
        <Card id="mainCard" bg={'light'} style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className='cardTextName'>{this.props.name}</Card.Title>
          <Card.Text className='cardText'>
            {`${this.props.level} | ${this.props.race} | ${this.props.Class}`} 
          </Card.Text>
          <div id="vedbuttonsOuter">
            <button
              id='view'
              class='vedbutton'
              class="btn-outline ">
              <i class="fas fa-exclamation-circle"></i>
              <span class="span">View</span>
            </button>

            <button
              id='delete'
              class='vedbutton'
              class="btn-outline danger">
              <i class="fas fa-times-circle"></i>
              <span class="span">Delete</span>
            </button>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default CharacterCard;
