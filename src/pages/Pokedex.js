import React, { Component } from 'react'

import Pokecard from '../components/Pokecard';
import { load } from '../helpers/consts';
import pcNext from '../sound_fx/pc_next_sound.mp3'
import '../styles/pokedex.css'

export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: true,
      allRequests: [],
      counter: 0,
      pokeInfo: [],
      buttonStatus: {
        prevButton: true,
        nextButton: false,
      }
    }
    this.pcNext = new Audio(pcNext)
  }
  
  pokeCardInfo = async (url, state) => {
    const request = await fetch(url);
    const reqJson = await request.json();
    const { results } = reqJson;
    this.setState(() => ({
      [state]: results,
    }));
  }

  pokeList = async (url) => {
    const request = await fetch(url);
    const pokemon = await request.json();
    return pokemon;
  }

  pokemonList = () => {
    const { allRequests } = this.state;
    this.setState({ pokeInfo: [], loading: true }, async () => {
      const pokemonRequest = allRequests.map( (poke) => this.pokeList(poke.url));
      const pokemonRequestResolved = await Promise.all(pokemonRequest);
      this.setState(() => ({ pokeInfo: pokemonRequestResolved, loading: false }));
    });
  }

  changePage = ({target: { name }}) => {
    const lastPage = 1110;
    this.setState(({ counter }) => {
      if (name === 'previous' ) return {counter: counter - 9}
      if (name === 'next') return {counter: counter + 9}
    }, async () => {
      const { counter } = this.state;
      counter > 0 ? this
        .setState({ buttonStatus: { prevButton: false } }) : this
          .setState({ buttonStatus: { prevButton: true } })
          await this.pokeCardInfo(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${counter}`, 'allRequests');
          counter >= lastPage && this.setState({ counter: -10 })
          this.pokemonList();
          this.pcNext.play()
    });
  }

  renderFirstPage = async () => {
    const { counter } = this.state;
    await this.pokeCardInfo(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${counter}`, 'allRequests');
    this.pokemonList();
  }

  componentDidMount() {
    this.renderFirstPage();
  }

  render() {
    const { pokeInfo, loading, buttonStatus: { prevButton, nextButton } } = this.state;
    const pokedex = pokeInfo.map((info) => <Pokecard key={info.id} pokeInfo={info} />)

    return (
      <main className="pokedex-container" data-testid="pokedex-exist">
        {loading ? load : <div className="pokedex">{pokedex}</div>}
        <section className='button-panel'>
          <button className='previous-button' name='previous' disabled={prevButton} onClick={ this.changePage }>Previous Page</button>
          <button className='next-button' name='next' disabled={nextButton} onClick={ this.changePage }>Next Page</button>
        </section>
      </main>
    )
  }
}
