import React from 'react';

import { Container } from './styles';

const ListCard: React.FC = () => {
  return(
    <Container>
      <li className="card">
        <div className="card__img">
          <img 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" 
            alt="Pokemon"
          />
        </div>

        <div className="card__description">
          <h4>Nome: <span>Bombasaur</span></h4> 
          
          <button>detalhes</button>
        </div>
      </li>
    </Container>
  );
};

export default ListCard;