import React from 'react';
import '../css/CharacterMenu.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import CardColumns from 'react-bootstrap/CardColumns'


class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: []
    }
  }

  async componentDidMount() {
    // Since this retrieves its data on componentDidMount, it has no way of updating itself when the prop for which char is displayed gets updated.
    // You'd need to use didReceiveProps, or even better, make this get request in CharacterMenu.js and pass down the results instead.
    const config = await this.props.config();
    console.log('config:', config);
    const oneChar = await axios.get(`${process.env.REACT_APP_SERVER}/characters/${this.props.mongid}`, config);
    console.log('that char:', oneChar.data);
    this.setState({ charData: oneChar.data.character });
  }

  render() {
    console.log('sheetData:', this.state.charData);
    let abilities = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];
    return (
      // if I don't have a name, I can't see the data?? that is sad
      this.state.charData.level?
        <>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='topCard'>
              <Card.Title>{this.state.charData.name}</Card.Title>
              <Card.Text>Level: {this.state.charData.level} | {this.state.charData.race} | {this.state.charData.class}</Card.Text>

              <Card.Text>HP: {this.state.charData.hitPoints}</Card.Text>
              <Card.Text>AC: {this.state.charData.armorClass} Speed: {this.state.charData.speed}</Card.Text>
            </Card.Body>
            <Card.Body></Card.Body>
          </Card>
          <Card>
            <Card.Title>Ability Scores</Card.Title>
            <Table striped bordered hover>
              <thead>
                {/* let's make this hurt less */}
                <tr>
                  <th class='asTitle'>Stat</th>
                  {abilities.map(ab => <th class="asTitle">{ab}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class='tableTitle'>Score</td>
                  {abilities.map(ab => <td class='as'>{this.state.charData.statBlock[0][ab.toLowerCase()]}</td>)}
                </tr>
                <tr>
                  <td class='tableTitle'>Mod</td>
                  {abilities.map(ab => <td class='as'>{this.state.charData.statBlock[1][ab.toLowerCase()]}</td>)}
                </tr>
                <tr>
                  <td class='tableTitle'>Save</td>
                  {abilities.map(ab => <td class='as'>{this.state.charData.statBlock[2][ab.toLowerCase()]}</td>)}
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card>
            <Card.Title>Skills</Card.Title>
            <ListGroup horizontal>
              {
                this.state.charData.skills.map(skill =>
                  <ListGroup.Item className='skills'>{skill.name}</ListGroup.Item>
                )
              }
            </ListGroup>
          </Card>
          {
            this.state.charData.spellcasting ?
            <Card>
            <Card.Body>
              <Card.Text className='spellCasting'>{this.state.charData.spellcasting.spellcasting_ability.name}</Card.Text>
              <Table>
              <thead>
                <tr>
                  <th class=''></th>
                </tr>
              </thead>
                <tr>
                  <td class='tableTitle'>Score</td>
                  {/* The fact that this always shows str is very sad */}
                  <td class='as'>{this.state.charData.statBlock[0].str}</td>
                </tr>
              </Table>
            </Card.Body>
          </Card> : <></>
          }
          <CardColumns>
            <Card>
              <Card.Title>Proficiencies</Card.Title>
            </Card>
            {
              this.state.charData.proficiencies.map(prof =>
                <Card>
                  <Card.Body>
                    <Card.Text className='profs'>{prof}</Card.Text>
                  </Card.Body>
                </Card>
              )
            }
            {
              this.state.charData.languages.map(lang =>
                <Card>
                  <Card.Body>
                    <Card.Text className='profs'>{lang}</Card.Text>
                  </Card.Body>
                </Card>
              )
            }
          </CardColumns>
          <Card className='equipment'>
            <Card.Body>
              <Card.Title>Equipment</Card.Title>
              {
                this.state.charData.equipment.map(equip =>
                  <Card.Text>{`${equip.equipment.name} ${equip.quantity}`}</Card.Text>
                )
              }
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text className='description'>{this.state.charData.description}</Card.Text>
            </Card.Body>
          </Card>
        </>
        : <></>
    );
  }
}

export default CharacterSheet;
