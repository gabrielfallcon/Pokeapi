import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  min-height: 300px;
  background: #EF5350;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  h1 {
    margin-top: 43px;
    color: #FFFFFF;
    font-size: 42px;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const SectionImg = styled.div`
  width: 250px;
  height: 250px;
  background: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -150px;

  img {
    width: 270px;
  }
`;

export const SectionListPokemons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: calc(150px + 24px);

  h2 {
    color: #FFFFFF;
    font-size: 36px;
    margin-bottom: 56px;
  }
  
`;

export const MorePokemons = styled.div`
  width: 200px;
  height: 100px;
  margin-bottom: -50px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: transparent;
    color: #FECA1B;
    font-size: 22px;
  }
`;

   
