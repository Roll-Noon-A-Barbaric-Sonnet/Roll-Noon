import React from 'react';
import Card from 'react-bootstrap/Card'
import '../css/CharacterCard.css';
import axios from 'axios';

class CharacterCard extends React.Component {
  
  deleteChar = async (id) => {
    let config = await this.props.config();
    let response = await axios.delete(`${process.env.REACT_APP_SERVER}/characters/${id}`, config);
    console.log(response);
    this.props.getChars();
  }
  
  render() {
    console.log(this.props);
    return (
        <Card id="mainCard" bg={'light'} style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className='cardTextName'>{this.props.name}</Card.Title>
          <Card.Text className='cardText'>
            {`Race ${this.props.race} | Level: 1 | Class: ${this.props.charClass}`} 
          </Card.Text>
          <div id="vedbuttonsOuter">
            <button
              onClick={()=>this.props.view(this.props.mongid)}
              id='view'
              class="btn-outline ">
              <i class="fas fa-exclamation-circle"></i>
              <span class="span">View</span>
            </button>

            <button
              onClick={()=>this.deleteChar(this.props.mongid)}
              id='delete'
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
