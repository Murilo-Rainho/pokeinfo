import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';

describe('Testing Pokedex component and his essencials funcionalities', () => {
  it('should render \'Pokedex\' component after clicking ' +
  'on the \'pokedex\' header link', () => {
    render(<App />);

    const pokeLink = screen.getByTestId('pokedex-link');
    fireEvent.click(pokeLink);
    const pokeComponent = screen.getByTestId('pokedex-exist');

    expect(pokeComponent).toBeInTheDocument();
  });

  it('should have one card with the text \'bulbasaur\'', async () => {
    render(<App />);

    const pokeLink = screen.getByTestId('pokedex-link');
    fireEvent.click(pokeLink);
    
    await waitForElementToBeRemoved(() => screen.getByAltText('Loading...'), { timeout: 3000 });
    const bulbasaurTitle = screen.getByRole('heading', { name: /bulbasaur/i })

    expect(bulbasaurTitle).toBeInTheDocument();
  });

  it('should render 9 cards after render \'Pokedex\' component',async () => {
    render(<App />);

    const pokeLink = screen.getByTestId('pokedex-link');
    fireEvent.click(pokeLink);
    
    await waitForElementToBeRemoved(() => screen.getByAltText('Loading...'), { timeout: 3000 });
    const allPokeCards = screen.getAllByTestId('pokemon-card-exist')

    expect(allPokeCards[0]).toBeInTheDocument();
    expect(allPokeCards[1]).toBeInTheDocument();
    expect(allPokeCards[2]).toBeInTheDocument();
    expect(allPokeCards[3]).toBeInTheDocument();
    expect(allPokeCards[4]).toBeInTheDocument();
    expect(allPokeCards[5]).toBeInTheDocument();
    expect(allPokeCards[6]).toBeInTheDocument();
    expect(allPokeCards[7]).toBeInTheDocument();
    expect(allPokeCards[8]).toBeInTheDocument();
  });
});