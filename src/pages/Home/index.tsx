import React, {useState, useEffect} from 'react';
import api  from '../../services/api';

import ListCard from '../../components/ListCard';

import celebiImg from '../../assets/Images/celebi.png';

import { 
  Container, 
  Header, 
  Main, 
  SectionImg, 
  SectionListPokemons,
  MorePokemons
} from './styles';

interface PokemonProps {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    api.get('').then(response => {
      const resultPokemons = response.data.results; 

      setPokemons([...pokemons, ...resultPokemons]);
    });
  }, []);


  const loadMorePokemon = async() => {
   
  }

  return (
    <Container>
      <Header>
        <h1>PokeApi</h1>
      </Header>

      <Main>
        <SectionImg>
            <img src={celebiImg} alt="Celebi"/>
        </SectionImg>

        <SectionListPokemons>
          <h2>Lista de Pokemons</h2>

          <ListCard pokemons={pokemons}/>
        </SectionListPokemons>

        <MorePokemons>
          <button
            onClick={loadMorePokemon}
          >
            Ver Mais...
          </button>
        </MorePokemons>
      </Main>
      
    </Container>
  );
};

export default Home