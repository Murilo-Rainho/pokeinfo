import React, { Component } from 'react'

import Pokecard from './Pokecard';

export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: true,
      allPoke: [],
      counter: 0,
      pokeInfo: [],
    }
  }

  loadingState = () => {
    const { loading } = this.state;
    if (loading) {
      this.setState(() => ({ loading: false }));
    } else {
      this.setState(() => ({ loading: true }));
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

  listPoke = async () => {
    const { allPoke } = this.state;
    this.setState({ pokeInfo: [], loading: true })
    const allPromises = allPoke.map( (poke) => this.allFetchPoke(poke.url));
    const allResolvedPromises = await Promise.all(allPromises);
    this.setState(() => ({ pokeInfo: allResolvedPromises, loading: false }));
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
    const { pokeInfo, loading } = this.state;
    const pokedex = pokeInfo.map((info) => <Pokecard key={info.id} pokeInfo={info} />)
    const load = <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="Loading..." />
    // const load = <img src="../img/loading.gif" alt="Loading..." />

    return (
      <div className="pokedex_container" data-testid="pokedex-exist">
        <h1>Pokedex</h1>
        {loading ? load : <div className="pokedex">{pokedex}</div>}
        <button onClick={ this.addCounter }>Next Page</button> 
      </div>
    )
  }
}
