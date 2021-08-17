import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div data-testid="header-exist" className="header">
        <h1 className="header-title">POKEMÓNS</h1>
        <section className="section-links">
          <Link data-testid="pokedex-link" className="link" to="/pokedex">Pokédex</Link>
          <Link data-testid="pokemon-link" className="link" to="/pokemon">Pokémon</Link>
        </section>
      </div>
    )
  }
}
