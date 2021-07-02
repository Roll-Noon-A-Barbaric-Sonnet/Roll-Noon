import React from 'react';
import CharacterCard from './CharacterCard.js';
import axios from 'axios';
import CardColumns from 'react-bootstrap/CardColumns';
import CharacterSheet from './CharacterSheet.js';
import { id } from 'common-tags';
class CharacterMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      charData : [],
      sheetId:'',
      sheet:false
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

  getOneChar = async (id) => {
    const config = await this.props.config();
    console.log('config:',config);
    const oneChar = await axios.get(`${process.env.REACT_APP_SERVER}/characters/${id}`,config);
    console.log('that char:',oneChar.data);
    return oneChar.data;
  }

  view = (id) => {
    this.setState({
      sheetId: id,
      sheet: true
    })
  }

  sheetClose = () => {
    this.setState({
      sheetId: '',
      sheet: false
    })
  }

  async componentDidMount(){
    this.getChars()
  }

  render () {
    return (
      <>
        <CardColumns>
          {this.state.charData?this.state.charData.map(character => <CharacterCard key={character._id} getChars={this.getChars} config={this.props.config} mongid={character._id} name={character.character.name} race={character.character.race} charClass={character.character.class} view={this.view} getChar={this.getOneChar}/>):<></>}
        </CardColumns>
        {this.state.sheet? <CharacterSheet mongid={this.state.sheetId} sheetClose={this.sheetClose} getChar={this.getOneChar} config={this.props.config}/>:<></>}
      </>
    );
  }
}
    
export default CharacterMenu;