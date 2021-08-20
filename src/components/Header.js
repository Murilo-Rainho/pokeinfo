import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css'

export default class Header extends Component {
  render() {
    return (
        <nav className="nav-links">
          <Link data-testid="pokedex-link" className="link" to="/pokedex">Pokédex</Link>
          <Link to='/' className="link pokemon-logo"></Link>
          <Link data-testid="pokemon-link" className="link" to="/pokemon">Search</Link>
        </nav>
    )
  }
}
