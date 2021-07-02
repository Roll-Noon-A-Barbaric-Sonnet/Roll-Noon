import React from 'react';
import CharacterCard from './CharacterCard.js';
import axios from 'axios'
class CharacterMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      charData : []
    }
  }
async componentDidMount(){
  let datas = await axios.get(`${process.env.REACT_APP_SERVER}/characters`);
  this.setState({charData: datas})
}
  render () {
    return (
      this.state.charData.map(character =>   <CharacterCard name={character.name} race={character.race} charClass={character.charClass}/>)
    
    );
  }
}
    
export default CharacterMenu;