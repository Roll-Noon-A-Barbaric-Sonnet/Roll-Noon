import React from 'react';
import '../css/index.css'
import Navbar from './Navbar.js';

class Header extends React.Component {

  render() {
    return (

      <header id='mainHeader'>
        <div id='titleChild'>
        <i id='scroll' class="fas fa-scroll fa-4x"></i>
        <h1 id='mainTitle'>Character Sonnet</h1>
        </div>
        <h6 id='mainSubTitle'>~ Created by Roll-Noon ~</h6>
        <Navbar />
      </header>
    );
  }
}

export default Header;