import React from 'react';
import LoginButton from './LogInButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import '../css/index.css';
import '../css/Navbar.css';


class Navbar extends React.Component {

  render() {

    const { isAuthenticated } = this.props.auth0;

    return (
      <nav id='mainNav'>
        <div id='navButtons'>
          {
            isAuthenticated ?
              <Link to='/selector'>
                <Button className='navButton'>My Characters</Button>
              </Link> : ''
          }

          {
            isAuthenticated ?
            <Link to="/builder" >
              <Button className="navButton" type="button">+ New Character</Button>
            </Link> : ''
          }

          {
            isAuthenticated ?
              <LogoutButton /> :
              <LoginButton />
          }
        </div>
      </nav>
    );
  }
}

export default withAuth0(Navbar);