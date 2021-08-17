import React, { Component } from 'react'

export default class Pokecard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      backgroundColor: 'gray',
    }
  }

  componentDidMount() {
    this.changeBackground();
  }

  ifColor = (name) => {
    if (name === 'grass') this.setState({ backgroundColor: '#5dad1b' });
    if (name === 'fire') this.setState({ backgroundColor: '#e04343' });
    if (name === 'water') this.setState({ backgroundColor: '#28aabb' });
    if (name === 'bug') this.setState({ backgroundColor: '#5ea25e' });
    if (name === 'electric') this.setState({ backgroundColor: 'yellow' });
    if (name === 'rock') this.setState({ backgroundColor: '#645151' });
    if (name === 'electric') this.setState({ backgroundColor: 'yellow' });
    if (name === 'poison') this.setState({ backgroundColor: 'purple' });
    if (name === 'normal') this.setState({ backgroundColor: '#d8d5d5' });
    if (name === 'ghost') this.setState({ backgroundColor: '#191970' });
    if (name === 'ground') this.setState({ backgroundColor: 'brown' });
    if (name === 'fighting') this.setState({ backgroundColor: 'orange' });
    if (name === 'psychic') this.setState({ backgroundColor: 'pink' });
    if (name === 'ice') this.setState({ backgroundColor: '#dae4e9' });
    if (name === 'dragon') this.setState({ backgroundColor: '#800000' });
    if (name === 'fairy') this.setState({ backgroundColor: '#f3d4de' });
    if (name === 'flying') this.setState({ backgroundColor: '#87ceeb' });
    if (name === 'dark') this.setState({ backgroundColor: '#00008b' });
    if (name === 'steel') this.setState({ backgroundColor: '#7b9095' });
  }

  changeBackground = () => {
    const { pokeInfo: { types } } = this.props;
    const [allType] = types;
    const { type: { name } } = allType;

    this.ifColor(name);
  }
  
  render() {
    const { backgroundColor } = this.state;
    const { pokeInfo: {
      name,
      sprites: { front_shiny } } } = this.props

    return (
      <div style={{ backgroundColor }} className="poke-card" data-testid="pokemon-card-exist">
        <h1>{name}</h1>
        <img src={ front_shiny } alt={ name } />
      </div>
    )
  }
}
