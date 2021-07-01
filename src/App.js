// import './css/index.css';
import React from 'react';
import CharacterForm from './classes/CharacterForm';
import CharacterMenu from './classes/CharacterMenu';
import Header from './classes/Header';
import Footer from './classes/Footer';
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
        <main id='mainBody'>
        <Switch>
          <Route exact path='/'></Route>
          <Route path='/selector'>
            <article id='mainArticle'>
            <CharacterMenu />
            </article>
          </Route>
          <Route path='/builder'>
            <CharacterForm />
          </Route>
        </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
