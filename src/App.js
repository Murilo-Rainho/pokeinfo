import './App.css';
import React,{ Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Home />
        <Switch>
          <Route path="/pokeinfo/pokedex" component={ Pokedex } />
          <Route path="/pokeinfo/pokemon" render={() => <Pokemon />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
