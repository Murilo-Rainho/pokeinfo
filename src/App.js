import './App.css';
import React,{ Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/pokeinfo'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/pokedex" component={ Pokedex } />
          <Route path="/pokemon" render={() => <Pokemon />} />
          <Route path="*" render={() => <NoMatch />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
