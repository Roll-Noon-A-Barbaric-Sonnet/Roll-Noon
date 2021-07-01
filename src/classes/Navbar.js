import React from 'react';
import axios from 'axios';
import LoginButton from './LogInButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../css/index.css'
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
      <nav id='mainNav'>
        <div id='navButtons'>
          <Link to='/selector'>
            <Button className="builderSelector">My Characters</Button>
          </Link>
          <LoginButton />
          <LogoutButton />
          <Link to="/builder" >
            <Button className="builderSelector" type="button">+ New Character</Button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;