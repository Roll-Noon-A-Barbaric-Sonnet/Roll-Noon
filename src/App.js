import './css/App.css';
import React from 'react';
import CharacterForm from './classes/CharacterForm';
import Navbar from './classes/Navbar';
// import { Auth0Provider } from "@auth0/auth0-react";
class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <h1>Welcome To Character Sonnet Front End</h1>
        <CharacterForm />
      </>
    );
  }
}

export default App;
