import React from 'react';
import CharacterCard from './CharacterCard.js';
import axios from 'axios';
import CardColumns from 'react-bootstrap/CardColumns';
class CharacterMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      charData : []
    }
  }
  getChars = async () => {
  const config = await this.props.config();
  console.log('config:',config)
  let charData = await axios.get(`${process.env.REACT_APP_SERVER}/characters`,config);
  console.log(charData.data);
  this.setState({
    charData: charData.data
  })
  }

  async componentDidMount(){
    this.getChars()
  }

  render () {
    return (
      <CardColumns>
        {this.state.charData?this.state.charData.map(character => <CharacterCard key={character._id} getChars={this.getChars} config={this.props.config} mongid={character._id} name={character.character.name} race={character.character.race} charClass={character.character.class}/>):<></>}
      </CardColumns>
    );
  }
}
    
export default CharacterMenu;