import './css/App.css';
import React from 'react';
import CharacterForm from './classes/CharacterForm';
import CharacterMenu from './classes/CharacterMenu';
import Header from './classes/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import { Auth0Provider } from "@auth0/auth0-react";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Header />
          <h1>Welcome To Character Sonnet Front End</h1>
        <Switch>
          {/* <Route path='/'></Route> */}
          <Route path='/selector'>
          <CharacterMenu/>
          </Route>
          <Route path='/builder'>
          <CharacterForm />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
