import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import pcSelect from '../sound_fx/pc_select_sound.mp3'
import '../styles/header.css'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.pcSelect = new Audio(pcSelect)
  }

  playSound = () => this.pcSelect.play()

  render() {
    return (
        <nav className="nav-links">
          <Link onClick={this.playSound} data-testid="pokedex-link" className="link" to="/pokedex">Pokédex</Link>
          <Link onClick={this.playSound} to='/' className="link pokemon-logo"></Link>
          <Link onClick={this.playSound} data-testid="pokemon-link" className="link" to="/pokemon">Search</Link>
        </nav>
    )
  }
}
