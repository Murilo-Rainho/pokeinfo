import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import Pokedex from '../components/Pokedex';

describe('Testing Pokedex component and his essencials funcionalities', () => {
  it('should render \'Pokedex\' component after clicking ' +
  'on the \'pokedex\' header link', () => {
    render(<App />);

    const pokeLink = screen.getByTestId('pokedex-link');
    fireEvent.click(pokeLink);
    const pokeComponent = screen.getByTestId('pokedex-exist');

    expect(pokeComponent).toBeInTheDocument();
  });

  it('should render 9 cards after render \'Pokedex\' component', async () => {
    // render(<Pokedex />);
    render(<App />);

    const pokeLink = screen.getByTestId('pokedex-link');
    fireEvent.click(pokeLink);

    const allPokeCards = await screen.findAllByTestId('pokemon-card-exist', { options: { timeout: 9000 } });

    expect(allPokeCards.lenght).toEqual(9);
  });

  it('should have one card with the text \'bulbasaur\'', async () => {
    render(<App />);

  });
});