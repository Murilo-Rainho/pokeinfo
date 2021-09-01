import React, { Component } from 'react'
import pokeballBackground from '../img/pokeball-background.png'

import '../styles/pokecard.css'

export default class Pokecard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      typeOneColor: '',
      typeTwoColor: 'none',
    }
  }

  componentDidMount() {
    this.changeBackground();
  }

  ifColor = (typeName, stateKey) => {
    if (typeName === 'grass') this.setState({ [stateKey]: '#5dad1b' });
    if (typeName === 'fire') this.setState({ [stateKey]: '#e04343' });
    if (typeName === 'water') this.setState({ [stateKey]: '#28aabb' });
    if (typeName === 'bug') this.setState({ [stateKey]: '#5ea25e' });
    if (typeName === 'electric') this.setState({ [stateKey]: 'yellow' });
    if (typeName === 'rock') this.setState({ [stateKey]: '#645151' });
    if (typeName === 'poison') this.setState({ [stateKey]: 'purple' });
    if (typeName === 'normal') this.setState({ [stateKey]: '#b1aaaa' });
    if (typeName === 'ghost') this.setState({ [stateKey]: '#191970' });
    if (typeName === 'ground') this.setState({ [stateKey]: 'brown' });
    if (typeName === 'fighting') this.setState({ [stateKey]: 'orange' });
    if (typeName === 'psychic') this.setState({ [stateKey]: '#6b16b2' });
    if (typeName === 'ice') this.setState({ [stateKey]: '#dae4e9' });
    if (typeName === 'dragon') this.setState({ [stateKey]: '#800000' });
    if (typeName === 'fairy') this.setState({ [stateKey]: '#ff758f' });
    if (typeName === 'flying') this.setState({ [stateKey]: '#007fff' });
    if (typeName === 'dark') this.setState({ [stateKey]: '#00008b' });
    if (typeName === 'steel') this.setState({ [stateKey]: '#7b9095' });
  }

  changeBackground = () => {
    const { pokeInfo: { types } } = this.props;
    const [firstType, secondType] = types;
    this.ifColor(firstType.type.name, 'typeOneColor')
    if (secondType) this.ifColor(secondType.type.name, 'typeTwoColor')
  }

  fixPokedexId = (id) => {
    if (id < 10) return `00${id}`
    if (id >= 10 && id < 100 ) return `0${id}`
    if (id >= 100 ) return id
  }
  
  render() {
    const { typeOneColor, typeTwoColor } = this.state;
    const { pokeInfo: {
      abilities,
      id,
      name,
      types,
      sprites: { front_default } } } = this.props

    return (
      <div className="poke-card" data-testid="pokemon-card-exist">
        <img className='background' src={pokeballBackground} alt='pokeball' />
        <img className='pokemon-sprite' src={ front_default } alt={ name } />
        <section className='info-container flip-card-front'>
          <div>
            <span>Nº: </span>
            <span>{this.fixPokedexId(id)}</span>
          </div>
          <div>
            <span>NAME: </span>
            <span>{name.toUpperCase()}</span>
          </div>
          <div>
            <span>TYPE: </span>
            <span className='pokemon-type' style={{backgroundColor: typeOneColor}}>{types[0].type.name.toUpperCase()}</span>
            <span className='pokemon-type' style={{backgroundColor: typeTwoColor}}>{types.length > 1 && types[1].type.name.toUpperCase()}</span>
          </div>
          <div>
            <span>ABILITY: </span>
            <span>{abilities[0].ability.name.toUpperCase()}</span>
          </div>
        </section>
      </div>
    )
  }
}
