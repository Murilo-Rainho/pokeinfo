import React, { Component } from 'react';
import charmander from '../img/charmander_sad.gif'

import '../styles/noMatch.css'

class NoMatch extends Component {
  render() {
    return (
      <main className='no-match-content'>
        <p className='no-match-text'>Sorry, this page does not exist</p>
        <img className='no-match-image' src={charmander} alt="charmander sad" />
      </main>
    );
  }
}

export default NoMatch;