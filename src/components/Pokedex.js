import React, { Component } from 'react'

import Pokecard from './Pokecard';

export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      allPoke: [],
      counter: 0,
      pokeInfo: [],
    }
  }
  
  fetchPoke = async (url, state) => {
    const request = await fetch(url);
    const reqJson = await request.json();
    const { results } = reqJson;
    this.setState(() => ({
      [state]: results,
    }));
  }

  allFetchPoke = async (url) => {
    const request = await fetch(url);
    const pokemon = await request.json();
    return pokemon;
  }

  listPoke = () => {
    const { allPoke } = this.state;
    this.setState({ pokeInfo: [] })
    allPoke.forEach( (poke) => {
      this.allFetchPoke(poke.url).then((data) => {
        this.setState((prevState) => ({
          pokeInfo: [...prevState.pokeInfo, data],
        }))
      });
    });
  }

  addCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 9
    }), async () => {
      const { counter } = this.state;
      await this.fetchPoke(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${counter}`, 'allPoke');
      this.listPoke();
    });
  }

  orderFetch = async () => {
    const { counter } = this.state;
    await this.fetchPoke(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${counter}`, 'allPoke');
    this.listPoke();
  }

  componentDidMount() {
    this.orderFetch();
  }

  componentDidUpdate() {
    // this.orderFetch();
  }

  render() {
    const { pokeInfo } = this.state;
    const pokedex = pokeInfo.map((info) => <Pokecard key={info.id} pokeInfo={info} />)
    return (
      <div className="pokedex_container" data-testid="pokedex-exist">
        <h1>Pokedex</h1>
        {/* <button onClick={ this.addCounter }>Next Page</button>  */}
        <div className="pokedex">{pokedex}</div>
        <button onClick={ this.addCounter }>Next Page</button> 
      </div>
    )
  }
}
