import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonProps {
  pokemons: Pokemon[];
}

const ListCard: React.FC<PokemonProps> = ({ pokemons } ) => {
  return(
    <Container>
      {pokemons.map((pokemon, indice) => {
        const count = indice + 1;
        const imgApi = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`

        return(
          <li className="card" key={pokemon.name}>
            <div className="card__img">
              <img src={imgApi} alt="Pokemon"/>
            </div>

            <div className="card__description">
              <h4>Nome: <span>{pokemon.name}</span></h4>

              <Link to={`/profile/:${indice+1}`}>detalhes</Link>
            </div>
          </li>
        )
      })}
    </Container>
  );
};

export default ListCard;