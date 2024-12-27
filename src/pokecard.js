import React, { Component } from "react";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="pokeCard">
        <h3 className="pokeCard-title">{this.props.name}</h3>
        <div className="pokeCard-image">
          <img src={imgSrc} alt={this.props.name}></img>
        </div>
        <div className="pokeCard-data">Type: {this.props.type}</div>
        <div className="pokeCard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}
export default PokeCard;
