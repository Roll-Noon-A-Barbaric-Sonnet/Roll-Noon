import React from 'react';
import axios from 'axios';
import LoginButton from './LogInButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import '../css/LoginButton.css';
import '../css/LogoutButton.css';

class Navbar extends React.Component {
  makeRequest = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    };
    const serverResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/test-login`, config);

    console.log(serverResponse);
  }

  render() {

    // const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <h1>Welcome To Character Sonnet</h1>
       
        <Link to="/builder" >
          <button class ="builderSelector" type="button">Character Builder</button>
        </Link>

        <Link to='/selector'>
          <button class ="builderSelector">Character Selector</button>
        </Link>
        
        <LoginButton />
        <LogoutButton />

      </>
    );
  }
}

export default Navbar;