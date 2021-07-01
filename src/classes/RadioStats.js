import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RadioStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryArray: [8,10,12,13,14,15],
      stats: ['','','','','','']

    };
  };
  
  radioChange = (group, value) => {
    let tempArr = this.state.stats
    tempArr[group]=value;
    this.setState({
      stats:tempArr
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    let scores = this.state.queryArray;
    let attributes = this.state.stats;
    console.log(attributes)
    if (attributes.reduce((dups,att)=>attributes.filter(at=>att==at).length!==1?dups=dups+1:dups,0)===0) {
      let statObj = {}
      for (let i=0;i<6;i++) {
        statObj[attributes[i]]=scores[i];
      }
      console.log(statObj);
    } else {
        alert('Please choose each stat only once.');
    };
    
  }
  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>Assign your ability scores, choose each stat only once.</h3>
        <h4>{`Score: ${this.state.queryArray[0]}`}</h4>
        <div id='0'>
          <Form.Check inline label="Str" name='group1' type='radio' onChange={()=>this.radioChange(0,'str')}/>
          <Form.Check inline label="Dex" name='group1' type='radio' onChange={()=>this.radioChange(0,'dex')}/>
          <Form.Check inline label="Con" name='group1' type='radio' onChange={()=>this.radioChange(0,'con')}/>
          <Form.Check inline label="Int" name='group1' type='radio' onChange={()=>this.radioChange(0,'int')}/>
          <Form.Check inline label="Wis" name='group1' type='radio' onChange={()=>this.radioChange(0,'wis')}/>
          <Form.Check inline label="Cha" name='group1' type='radio' onChange={()=>this.radioChange(0,'cha')}/>
        </div>
        <h4>{`Score: ${this.state.queryArray[1]}`}</h4>
        <div id='1'>
          <Form.Check inline label="Str" name='group2' type='radio' onChange={()=>this.radioChange(1,'str')}/>
          <Form.Check inline label="Dex" name='group2' type='radio' onChange={()=>this.radioChange(1,'dex')}/>
          <Form.Check inline label="Con" name='group2' type='radio' onChange={()=>this.radioChange(1,'con')}/>
          <Form.Check inline label="Int" name='group2' type='radio' onChange={()=>this.radioChange(1,'int')}/>
          <Form.Check inline label="Wis" name='group2' type='radio' onChange={()=>this.radioChange(1,'wis')}/>
          <Form.Check inline label="Cha" name='group2' type='radio' onChange={()=>this.radioChange(1,'cha')}/>
        </div>
        <h4>{`Score: ${this.state.queryArray[2]}`}</h4>
        <div id='2'>
          <Form.Check inline label="Str" name='group3' type='radio' onChange={()=>this.radioChange(2,'str')}/>
          <Form.Check inline label="Dex" name='group3' type='radio' onChange={()=>this.radioChange(2,'dex')}/>
          <Form.Check inline label="Con" name='group3' type='radio' onChange={()=>this.radioChange(2,'con')}/>
          <Form.Check inline label="Int" name='group3' type='radio' onChange={()=>this.radioChange(2,'int')}/>
          <Form.Check inline label="Wis" name='group3' type='radio' onChange={()=>this.radioChange(2,'wis')}/>
          <Form.Check inline label="Cha" name='group3' type='radio' onChange={()=>this.radioChange(2,'cha')}/>
        </div>
        <h4>{`Score: ${this.state.queryArray[3]}`}</h4>
        <div id='3'>
          <Form.Check inline label="Str" name='group4' type='radio' onChange={()=>this.radioChange(3,'str')}/>
          <Form.Check inline label="Dex" name='group4' type='radio' onChange={()=>this.radioChange(3,'dex')}/>
          <Form.Check inline label="Con" name='group4' type='radio' onChange={()=>this.radioChange(3,'con')}/>
          <Form.Check inline label="Int" name='group4' type='radio' onChange={()=>this.radioChange(3,'int')}/>
          <Form.Check inline label="Wis" name='group4' type='radio' onChange={()=>this.radioChange(3,'wis')}/>
          <Form.Check inline label="Cha" name='group4' type='radio' onChange={()=>this.radioChange(3,'cha')}/>
        </div>
        <h4>{`Score: ${this.state.queryArray[4]}`}</h4>
        <div id='4'>
          <Form.Check inline label="Str" name="group5" type='radio' onChange={()=>this.radioChange(4,'str')}/>
          <Form.Check inline label="Dex" name="group5" type='radio' onChange={()=>this.radioChange(4,'dex')}/>
          <Form.Check inline label="Con" name="group5" type='radio' onChange={()=>this.radioChange(4,'con')}/>
          <Form.Check inline label="Int" name="group5" type='radio' onChange={()=>this.radioChange(4,'int')}/>
          <Form.Check inline label="Wis" name="group5" type='radio' onChange={()=>this.radioChange(4,'wis')}/>
          <Form.Check inline label="Cha" name="group5" type='radio' onChange={()=>this.radioChange(4,'cha')}/>
        </div>
        <h4>{`Score: ${this.state.queryArray[5]}`}</h4>
        <div id='5'>
          <Form.Check inline label="Str" name="group6" type='radio' onChange={()=>this.radioChange(5,'str')}/>
          <Form.Check inline label="Dex" name="group6" type='radio' onChange={()=>this.radioChange(5,'dex')}/>
          <Form.Check inline label="Con" name="group6" type='radio' onChange={()=>this.radioChange(5,'con')}/>
          <Form.Check inline label="Int" name="group6" type='radio' onChange={()=>this.radioChange(5,'int')}/>
          <Form.Check inline label="Wis" name="group6" type='radio' onChange={()=>this.radioChange(5,'wis')}/>
          <Form.Check inline label="Cha" name="group6" type='radio' onChange={()=>this.radioChange(5,'cha')}/>
        </div> 
        <Button type='submit'>Finalize</Button>     
      </Form>
    );
  };
}

export default RadioStats;
