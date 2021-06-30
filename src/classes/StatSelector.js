import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';

class StatSelector extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    standardArray: [8,10,12,13,14,15],
    validStats: [8,10,12,13,14,15],
    //These are the stats we will submit.
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  }
}

// Halndlers for each input box
strHandler = e => {
  console.log(e.target.value)
  this.setState({str: e.target.value})
  let stats = [this.state.str, this.state.dex, this.state.con, this.state.int, this.state.wis, this.state.cha]
  console.log(stats);
  let validStats = this.state.validStats.filter(i => !stats.includes(i) && i!=e.target.value);
  console.log(validStats);
  this.setState({validStats})
}

dexHandler = e => {
  console.log(e.target.value)
  this.setState({dex: e.target.value})
  let stats = [this.state.str, this.state.dex, this.state.con, this.state.int, this.state.wis, this.state.cha]
  console.log(stats);
  let validStats = this.state.validStats.filter(i => !stats.includes(i) && i!=e.target.value);
  console.log(validStats);
  this.setState({validStats})
}

conHandler = e => {
  this.setState({con: e.value})
  let stats = [this.state.str, this.state.dex, this.state.con, this.state.int, this.state.wis, this.state.cha]
  console.log(stats);
  let validStats = this.state.validStats.filter(i => !stats.includes(i) && i!=e.target.value);
  console.log(validStats);
  this.setState({validStats})
}

intHandler = e => {
  this.setState({int: e.value})
  let stats = [this.state.str, this.state.dex, this.state.con, this.state.int, this.state.wis, this.state.cha]
  console.log(stats);
  let validStats = this.state.validStats.filter(i => !stats.includes(i) && i!=e.target.value);
  console.log(validStats);
  this.setState({validStats})
}

wisHandler = e => {
  this.setState({wis: e.value})
  let stats = [this.state.str, this.state.dex, this.state.con, this.state.int, this.state.wis, this.state.cha]
  console.log(stats);
  let validStats = this.state.validStats.filter(i => !stats.includes(i) && i!=e.target.value);
  console.log(validStats);
  this.setState({validStats})
}

chaHandler = e => {
  this.setState({cha: e.value})
  let stats = [this.state.str, this.state.dex, this.state.con, this.state.int, this.state.wis, this.state.cha]
  console.log(stats);
  let validStats = this.state.validStats.filter(i => !stats.includes(i) && i!=e.target.value);
  console.log(validStats);
  this.setState({validStats})
}

handleSubmit = e => {}

//resets stats to 0, resets validStats arr
resetStats = e => {
  e.preventDefault();
  this.setState({validStats: [8,10,12,13,14,15]})
  this.setState({str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0})
}

  render () {
    return (
      <>
        <h1>get sum STATS</h1>
        <Button onClick={this.resetStats}>Reset Stats</Button>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Strength</Form.Label>
          <Form.Control as="select" onChange={this.strHandler}>
          <option>{this.state.str}</option>
            {this.state.validStats.map(i => <option value={i}>{i}</option>)}
          </Form.Control>
          <Form.Label>Dexterity</Form.Label>
          <Form.Control as="select" onChange={this.dexHandler}>
          <option>{this.state.dex}</option>
          {this.state.validStats.map(i => <option value={i}>{i}</option>)}
          </Form.Control>
          <Form.Label>Constitution</Form.Label>
          <Form.Control as="select" onChange={this.conHandler}>
          <option>{this.state.con}</option>
          {this.state.validStats.map(i => <option value={i}>{i}</option>)}
          </Form.Control>
          <Form.Label>Intelligence</Form.Label>
          <Form.Control as="select" onChange={this.intHandler}>
          <option>{this.state.int}</option>
          {this.state.validStats.map(i => <option value={i}>{i}</option>)}
          </Form.Control>
          <Form.Label>Wisdom</Form.Label>
          <Form.Control as="select" onChange={this.wisHandler}>
          <option>{this.state.wis}</option>
          {this.state.validStats.map(i => <option value={i}>{i}</option>)}
          </Form.Control>
          <Form.Label>Charisma</Form.Label>
          <Form.Control as="select" onChange={this.chaHandler}>
          <option>{this.state.cha}</option>
          {this.state.validStats.map(i => <option value={i}>{i}</option>)}
          </Form.Control>
          <Button type="submit">Finalize Stats!</Button>
        </Form>
      </>
    );
  }
}
    
export default StatSelector;