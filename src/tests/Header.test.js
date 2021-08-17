import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Testing Header component and his essencials funcionalities', () => {
  it('should have render the Header component', () => {
    render(<App />);
  
    const pokemons = screen.getByTestId('header-exist');

    expect(pokemons).toBeInTheDocument();
  });

  it('should have a Link to \'Pokedex\' component', () => {
    render(<App />);

    const pokedex = screen.getByTestId('pokedex-link');
    fireEvent.click(pokedex);

    const pokedexComponent = screen.getByTestId('pokedex-exist');

    expect(pokedexComponent).toBeInTheDocument();
  });

  it('should have a Link to \'Pokemon\' component', () => {
    render(<App />);

    const pokemon = screen.getByTestId('pokemon-link');
    fireEvent.click(pokemon);

    const pokemonComponent = screen.getByTestId('pokemon-exist');

    expect(pokemonComponent).toBeInTheDocument();
  });

  it('should be able to switch from the pokedex to ' +
  'the pokemon and the other way around too', () => {
    render(<App />);

    const pokemon = screen.getByTestId('pokemon-link');
    const pokedex = screen.getByTestId('pokedex-link');

    fireEvent.click(pokemon);
    const pokemonComponent = screen.getByTestId('pokemon-exist');
    
    expect(pokemonComponent).toBeInTheDocument();
    
    fireEvent.click(pokedex);
    const pokedexComponent = screen.getByTestId('pokedex-exist');

    expect(pokedexComponent).toBeInTheDocument();

    fireEvent.click(pokemon);
    
    const pokemonComponentAgain = screen.getByTestId('pokemon-exist');
    expect(pokemonComponentAgain).toBeInTheDocument();
    
  });
});
