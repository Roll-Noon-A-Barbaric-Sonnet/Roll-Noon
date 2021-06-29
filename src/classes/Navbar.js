import React from 'react';
import axios from 'axios';
import LoginButton from './LogInButton';
import LogoutButton from './LogoutButton';

class Navbar extends React.Component {
  makeRequest = async() =>{
    const {getIdTokenClaims} = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
  
    const config = {
      headers: {"Authorization": `Bearer ${jwt}` }
    };
    const serverResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/test-login`, config);
  
    console.log(serverResponse);
  }

  render () {

    // const { isAuthenticated } = this.props.auth0;

    return (
    <>
      <h1>Navbar</h1>

        <LoginButton /> 
        <LogoutButton />

    </>
    );
  }
}
    
export default Navbar;