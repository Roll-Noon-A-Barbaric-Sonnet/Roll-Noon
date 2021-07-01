import React from 'react';
import '../css/index.css'
import Navbar from './Navbar.js';

class Header extends React.Component {

  render() {
    return (

      <header id='mainHeader'>
        <h1 id='mainTitle'>Character Sonnet</h1>
        <h6 id='mainSubTitle'>~ Created by Roll-Noon ~</h6>
        <Navbar />
      </header>
    );
  }
}

export default Header;