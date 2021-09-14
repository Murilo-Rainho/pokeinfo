import React, { Component } from 'react'

import '../styles/search.css';
import { load } from '../helpers/consts';
import Pokecard from '../components/Pokecard';

import pokemonFound from '../sound_fx/pokemon_found.mp3';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: '',
      pokemonJson: {},
      loading: false,
      landingMessage: 'Catch your Pokémon!!!',
    }

    this.pokemonFound = new Audio(pokemonFound);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  }

  findPokemon = () => {
    const { inputName } = this.state;
    if (!inputName) return null
    this.setState(() => ({ loading: true }), async () => {
      try {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`);
        const json = await request.json();
        this.pokemonFound.play();
        this.setState(() => ({ landingMessage: '', pokemonJson: json, inputName: '', loading: false }));
      } catch (error) {
        this.setState(() => ({ loading: false, landingMessage: 'Pokémon Not Found', inputName: '' }));
      }
    });
  }

  renderContent = () => {
    const { landingMessage, pokemonJson } = this.state;
    if (landingMessage) return <p>{ landingMessage }</p>;
    return <Pokecard pokeInfo={ pokemonJson } />;
  }
  
  render() {
    const { inputName, loading } = this.state;
    return (
      <main className="search-main" data-testid="pokemon-exist">
        <section className="search-section">
          <label htmlFor="input-name">
            <input
              // autoComplete="off"
              className="search-input"
              value={ inputName }
              onChange={ this.handleChange }
              name="inputName"
              id="input-name"
              placeholder="Pokémon name"
              type="text"
              onKeyDown={ (event) => {
                if (event.key === 'Enter') this.findPokemon()
              } }
            />
          </label>
          <button
            type="button"
            onClick={ this.findPokemon }
            className="search-btn"
          >
            Find Pokémon!
          </button>
        </section>
        { loading ? load : this.renderContent() }
      </main>
    )
  }
}
