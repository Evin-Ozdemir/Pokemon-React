import React, { Component } from "react";
import PokeCard from "./pokecard";
import "./pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h2 className="pokedex-winner">Winning Player</h2>;
    } else {
      title = <h2 className="pokedex-loser">Losing Player</h2>;
    }
    return (
      <div className="pokedex">
        {title}
        <h4>Total Experince: {this.props.exp}</h4>
        <div className="pokedex-cards">
          {this.props.pokemon.map((p) => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
