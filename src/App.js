import './css/App.css';
import React from 'react';
import CharacterForm from './classes/CharacterForm';

import CharacterMenu from './classes/CharacterMenu';

import Header from './classes/Header.js';
// import { Auth0Provider } from "@auth0/auth0-react";

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <h1>Welcome To Character Sonnet Front End</h1>
        <CharacterForm />
        <CharacterMenu/>
      </>
    );
  }
}

export default App;
