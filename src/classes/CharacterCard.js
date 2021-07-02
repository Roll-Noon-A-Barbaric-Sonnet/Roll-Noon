import React from 'react';
import Card from 'react-bootstrap/Card'
import { CardColumns } from 'react-bootstrap';
import '../css/CharacterCard.css';

class CharacterCard extends React.Component {
  render() {
    return (

      //Css for character card position is in the index.css

      //Stretch Goal Make Classes Change Border Color maybe background color? who knows
      
        <Card id="mainCard" bg={'light'} style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className='cardTextName'>{/*Enter Custom User Name from earlier in form*/}{this.props.name}</Card.Title>
          <Card.Text className='cardText'>
            {`Character Race Here ${this.props.race} | Character Level: 1 | Character Class: ${this.props.charClass}`} 
          </Card.Text>
          {/*Need button click handeler to go to a different page, edit, and delete?*/}
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
{/* <CardColumns>
         
         {this.props.currentData.map((data, i) =>

           <HornedBeast
             beastNum={i}
             key={i}
             title={data.title}
             imgUrl={data.image_url}
             description={data.description}
             horns={data.horns}
             showModal={this.props.showModal}
             hideModal={this.hideModal}
           />
         )}

       </CardColumns> */}