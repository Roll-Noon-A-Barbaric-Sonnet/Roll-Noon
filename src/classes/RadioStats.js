import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


//big object arrays incoming: 
let skills = [
  {"index":"acrobatics","name":"Acrobatics","url":"/api/skills/acrobatics"},
  {"index":"animal-handling","name":"Animal Handling","url":"/api/skills/animal-handling"},
  {"index":"arcana","name":"Arcana","url":"/api/skills/arcana"},
  {"index":"athletics","name":"Athletics","url":"/api/skills/athletics"},
  {"index":"deception","name":"Deception","url":"/api/skills/deception"},
  {"index":"history","name":"History","url":"/api/skills/history"},
  {"index":"insight","name":"Insight","url":"/api/skills/insight"},
  {"index":"intimidation","name":"Intimidation","url":"/api/skills/intimidation"},
  {"index":"investigation","name":"Investigation","url":"/api/skills/investigation"},
  {"index":"medicine","name":"Medicine","url":"/api/skills/medicine"},
  {"index":"nature","name":"Nature","url":"/api/skills/nature"},
  {"index":"perception","name":"Perception","url":"/api/skills/perception"},
  {"index":"performance","name":"Performance","url":"/api/skills/performance"},
  {"index":"persuasion","name":"Persuasion","url":"/api/skills/persuasion"},
  {"index":"religion","name":"Religion","url":"/api/skills/religion"},
  {"index":"sleight-of-hand","name":"Sleight of Hand","url":"/api/skills/sleight-of-hand"},
  {"index":"stealth","name":"Stealth","url":"/api/skills/stealth"},{"index":"survival","name":"Survival","url":"/api/skills/survival"}
];

let languages = [
  {"index":"abyssal","name":"Abyssal","url":"/api/languages/abyssal"},
  {"index":"celestial","name":"Celestial","url":"/api/languages/celestial"},
  {"index":"common","name":"Common","url":"/api/languages/common"},
  {"index":"deep-speech","name":"Deep Speech","url":"/api/languages/deep-speech"},
  {"index":"draconic","name":"Draconic","url":"/api/languages/draconic"},
  {"index":"dwarvish","name":"Dwarvish","url":"/api/languages/dwarvish"},
  {"index":"elvish","name":"Elvish","url":"/api/languages/elvish"},
  {"index":"giant","name":"Giant","url":"/api/languages/giant"},
  {"index":"gnomish","name":"Gnomish","url":"/api/languages/gnomish"},
  {"index":"goblin","name":"Goblin","url":"/api/languages/goblin"},
  {"index":"halfling","name":"Halfling","url":"/api/languages/halfling"},
  {"index":"infernal","name":"Infernal","url":"/api/languages/infernal"},
  {"index":"orc","name":"Orc","url":"/api/languages/orc"},
  {"index":"primordial","name":"Primordial","url":"/api/languages/primordial"},
  {"index":"sylvan","name":"Sylvan","url":"/api/languages/sylvan"},
  {"index":"undercommon","name":"Undercommon","url":"/api/languages/undercommon"}
];

let tools = [
{"name": "Alchemist's Supplies", "index": "alchemists-supplies", "url": "custom"},
{"name": "Brewer's Supplies", "index": "brewers-supplies", "url": "custom"},
{"name": "Calligrapher's Supplies", "index": "calligraphers-supplies", "url": "custom"},
{"name": "Carpenter's Tools", "index": "carpenters-tools", "url": "custom"},
{"name": "Cobbler's Tools", "index": "cobblers-tools", "url": "custom"},
{"name": "Cook's Utensils", "index": "cooks-utensils", "url": "custom"},
{"name": "Disguise Kit", "index": "disguise-kit", "url": "custom"},
{"name": "Forgery Kit", "index": "forgery-kit", "url": "custom"},
{"name": "Glassblower's Tools", "index": "glassblowers-tools", "url": "custom"},
{"name": "Herbalism Kit", "index": "herbalism-kit", "url": "custom"},
{"name": "Jeweler's Tools", "index": "jewelers-tools", "url": "custom"},
{"name": "Land Vehicles", "index": "land-vehicles", "url": "custom"},
{"name": "Leatherworker's Tools", "index": "leatherworkers-tools", "url": "custom"},
{"name": "Mason's Tools", "index": "masons-tools", "url": "custom"},
{"name": "Navigator's Tools", "index": "navigators-tools", "url": "custom"},
{"name": "Painter's Supplies", "index": "painters-supplies", "url": "custom"},
{"name": "Poisoner's Kit", "index": "poisoners-kit", "url": "custom"},
{"name": "Potter's Tools", "index": "potters-tools", "url": "custom"},
{"name": "Smith's Tools", "index": "smiths-tools", "url": "custom"},
{"name": "Thieves' Tools", "index": "thieves-tools", "url": "custom"},
{"name": "Tinker's Tools", "index": "tinkers-tools", "url": "custom"},
{"name": "Water Vehicles", "index": "water-vehicles", "url": "custom"},
{"name": "Weaver's Tools", "index": "weavers-tools", "url": "custom"},
{"name": "Woodcarver's Tools", "index": "woodcarvers-tools", "url": "custom"}
];

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
    let skillOne=e.target.skillOne.value;
    let skillTwo=e.target.skillTwo.value;
    let toolOne=e.target.toolOne.value;
    let toolTwo=e.target.toolTwo.value;
    let profArray = [skillOne,skillTwo,toolOne,toolTwo];
    profArray = profArray.map(indx=>[...skills,...tools,...languages].find(obj=>obj.index===indx))
    if (attributes.reduce((dups,att)=>attributes.filter(at=>att===at).length!==1?dups=dups+1:dups,0)===0) {
      let statObj = {}
      for (let i=0;i<6;i++) {
        statObj[attributes[i]]=scores[i];
      }
      this.props.finish(statObj,profArray);
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
        <Form.Group controlId="skillOne">
            <Form.Label>Skills</Form.Label>
            <Form.Control as="select">
              {skills.map(choice => <option value={choice.index}>{`Skill: ${choice.name}`}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="skillTwo">
            <Form.Control as="select">
              {skills.map(choice => <option value={choice.index}>{`Skill: ${choice.name}`}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="toolOne">
          <Form.Label>Tool/Language Proficiencies</Form.Label>
          <Form.Control as="select">
            {[...tools.map(choice => <option value={choice.index}>{`Tool Proficiency: ${choice.name}`}</option>),...languages.map(choice => <option value={choice.index}>{`Language: ${choice.name}`}</option>)]}
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="toolTwo">
          <Form.Control as="select">
            {[...tools,...languages].map(choice => <option value={choice.index}>{`Tool Proficiency: ${choice.name}`}</option>)}
          </Form.Control>
          </Form.Group>
          <Button type='submit'>Finalize</Button>     
      </Form>
    );
  };
}

export default RadioStats;
