import React from 'react';
// import '../css/App.css'

class Footer extends React.Component {

  render() {
    return (
      <footer id='mainFooter'>
        <i class="fas fa-dice-d20 fa-4x" id='d20'></i>
        <div id='authors'>
          <h4 id='footerAuthors'>Authors:</h4>
        </div>
        <div id='ourNames'>
          <a id='team' href='https://github.com/Barnord'>Benjamin Arno</a>
          <a id='team' href='https://github.com/Steven-Boston'>Steven Boston</a>
        </div>
        <div id='ourNames'>
          <a id='team' href='https://github.com/zgameboyz'>Joel Connell</a>
          <a id='team' href='https://github.com/BeniBarra'>Benjamin Ibarra</a>
        </div>
        <div id='link'>
          <h4 id='footerAuthors'>Links:</h4>
        </div>
        <div id='links'>
          <a id='url' href="https://github.com/Roll-Noon-A-Barbaric-Sonnet">Roll Noon Github</a>
          <a id='url' href="https://dnd.wizards.com/">D&D Offical</a>
        </div>
        <div></div>
        <i class="fas fa-dice-d20 fa-4x" id='d20'></i>
      </footer>
    );
  }
}

export default Footer;