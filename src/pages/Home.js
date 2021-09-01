import React, { Component } from 'react';

import '../styles/home.css'
import professorOak from '../img/professor-oak.png'

export default class Home extends Component {
  render() {
    return (
      <main data-testid="home-exist" className='main-home'>
        <section className='img-container'>
          <div className='pokemon-top-right'>
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/e/e1/Spr_5b_006.png' alt='charizard' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/6/68/Spr_5b_003_m.png' alt='venusaur' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/3/3d/Spr_5b_009.png' alt='blastoise' />
          </div>
          <div className='pokemon-top-left'>
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/e/e8/Spr_5b_244.png' alt='entei' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/b/b0/Spr_5b_243.png' alt='raikou' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/6/6a/Spr_5b_245.png' alt='suicune' />
          </div>
          <div className='pokemon-bottom-right'>
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/5/5d/Spr_5b_032.png' alt='nidoran-m' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/1/16/Spr_5b_033.png' alt='nidorino' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/4/46/Spr_5b_034.png' alt='nidoran-m' />
          </div>
          <div className='pokemon-bottom-left'>
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png' alt='mew' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/7/73/Spr_5b_150.png' alt='mewtwo' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/9/9f/Spr_5b_251.png' alt='celebi' />
          </div>
          <img className='professor-img' src={professorOak} alt="professor-oak" />
        </section>
        <p className='welcome-text'>
          Welcome to the world of pokemon!
          Here you can find a lot of info about your favorite monster,
          or you can check our pokedex and see all types of pokemon that our pokemon trainer have encountered
        </p>
      </main>
    )
  }
}


{/* <img className='pokemon-top-gif pokemon-top-right' style={{ left: '15vw' }} src='https://cdn2.bulbagarden.net/upload/e/e1/Spr_5b_006.png' alt='charizard' />
<img className='pokemon-top-gif pokemon-top-right' style={{ left: '27vw' }} src='https://cdn2.bulbagarden.net/upload/6/68/Spr_5b_003_m.png' alt='venusaur' />
<img className='pokemon-top-gif pokemon-top-right' style={{ left: '40vw' }} src='https://cdn2.bulbagarden.net/upload/3/3d/Spr_5b_009.png' alt='blastoise' /> */}
{/* <img className='pokemon-bottom-gif pokemon-bottom-right' style={{ left: '15vw' }} src='https://cdn2.bulbagarden.net/upload/5/5d/Spr_5b_032.png' alt='nidoran-m' />
<img className='pokemon-bottom-gif pokemon-bottom-right' style={{ left: '27vw' }} src='https://cdn2.bulbagarden.net/upload/1/16/Spr_5b_033.png' alt='nidorino' />
<img className='pokemon-bottom-gif pokemon-bottom-right' style={{ left: '40vw' }} src='https://cdn2.bulbagarden.net/upload/4/46/Spr_5b_034.png' alt='nidoran-m' />
<img className='pokemon-top-gif pokemon-top-left' style={{ right: '15vw' }} src='https://cdn2.bulbagarden.net/upload/e/e8/Spr_5b_244.png' alt='entei' />
<img className='pokemon-top-gif pokemon-top-left' style={{ right: '27vw' }} src='https://cdn2.bulbagarden.net/upload/b/b0/Spr_5b_243.png' alt='raikou' />
<img className='pokemon-top-gif pokemon-top-left' style={{ right: '40vw' }} src='https://cdn2.bulbagarden.net/upload/6/6a/Spr_5b_245.png' alt='suicune' />
<img className='pokemon-bottom-gif pokemon-bottom-left' style={{ right: '15vw' }} src='https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png' alt='mew' />
<img className='pokemon-bottom-gif pokemon-bottom-left' style={{ right: '27vw' }} src='https://cdn2.bulbagarden.net/upload/7/73/Spr_5b_150.png' alt='mewtwo' />
<img className='pokemon-bottom-gif pokemon-bottom-left' style={{ right: '40vw' }} src='https://cdn2.bulbagarden.net/upload/9/9f/Spr_5b_251.png' alt='celebi' /> */}