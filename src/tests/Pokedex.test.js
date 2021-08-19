import React from 'react';
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
  it('should to do a request to an API',async () => {
    render(<App />);

    const allPokeRequests = {
      "count":1118,
      "next":"https://pokeapi.co/api/v2/pokemon/?offset=18&limit=9",
      "previous":"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9",
      "results":[
        {"name":"caterpie", "url":"https://pokeapi.co/api/v2/pokemon/10/"},
        {"name":"metapod", "url":"https://pokeapi.co/api/v2/pokemon/11/"},
        {"name":"butterfree", "url":"https://pokeapi.co/api/v2/pokemon/12/"},
        {"name":"weedle", "url":"https://pokeapi.co/api/v2/pokemon/13/"},
        {"name":"kakuna", "url":"https://pokeapi.co/api/v2/pokemon/14/"},
        {"name":"beedrill", "url":"https://pokeapi.co/api/v2/pokemon/15/"},
        {"name":"pidgey", "url":"https://pokeapi.co/api/v2/pokemon/16/"},
        {"name":"pidgeotto", "url":"https://pokeapi.co/api/v2/pokemon/17/"},
        {"name":"pidgeot", "url":"https://pokeapi.co/api/v2/pokemon/18/"}
      ]
    }

    jest.spyOn(global, "fetch")

    const pokeLink = screen.getByTestId('pokedex-link');
    fireEvent.click(pokeLink);
    await waitForElementToBeRemoved(() => screen.getByAltText('Loading...'), { timeout: 3000 });


    expect(global.fetch).toBeCalledTimes(9);
    // expect(global.fetch).toBeCalledWith();
  });
});