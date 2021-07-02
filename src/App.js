// import './css/index.css';
import React from 'react';
import CharacterForm from './classes/CharacterForm';
import CharacterMenu from './classes/CharacterMenu';
import Header from './classes/Header';
import Footer from './classes/Footer';
import CharacterSheet from './classes/CharacterSheet';
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from './classes/Landing';
import './css/index.css';
import { withAuth0 } from '@auth0/auth0-react';



class App extends React.Component {
  
  getConfig = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { "authorization": `Bearer ${jwt}` }
    };
    return config;
  }

  render() {
    const { isAuthenticated } = this.props.auth0
    return (
      <Router>
        <main id='headerMain'>
          <Header />
          <main id='mainBody'>
            <Switch>
              <Route exact path='/'>
                <Landing />
              </Route>
              <Route path='/selector'>
                {
                  isAuthenticated ?
                  <article id='mainArticle'>
                  <CharacterMenu config={this.getConfig}/>
                </article> : <Landing />
                }
              </Route>
              <Route path='/builder'>
              {
                isAuthenticated ?
                <CharacterForm config={this.getConfig}/> : <Landing />
              }
              </Route>
              <Route path='/charsheet'>
              <CharacterSheet/>
              </Route>
            </Switch>
          </main>
        </main>
        <Footer />
    
      </Router>
    );
  }
}

export default withAuth0(App);
