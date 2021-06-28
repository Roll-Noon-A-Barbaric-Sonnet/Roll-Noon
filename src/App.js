import './css/App.css';
import React from 'react';
import CharacterForm from './classes/CharacterForm';
class App extends React.Component {

  render() {
    return (
      <>
        <h1>Welcome To Character Sonnet Front End</h1>

        <CharacterForm />
      </>
    );
  }
}

export default App;
