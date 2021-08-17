import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div data-testid="home-exist">
        <h2>Bem-vindo ao Mundo Pokémon!!</h2>
        <p>
          Aqui, você pode conhecer um pouco de cada pokémon separadamente ou
          até mesmo ver a Pokedex com todos os pokémons!! (ou pelo menos a maioria deles)
        </p>
      </div>
    )
  }
}
