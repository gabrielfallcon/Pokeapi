import React from 'react';

import ListCard from '../../components/ListCard';

import celebiImg from '../../assets/Images/celebi.png';

import { 
  Container, 
  Header, 
  Main, 
  SectionImg, 
  SectionListPokemons 
} from './styles';

const Home: React.FC = () => {
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

          <ListCard />
        </SectionListPokemons>
      </Main>
    </Container>
  );
};

export default Home