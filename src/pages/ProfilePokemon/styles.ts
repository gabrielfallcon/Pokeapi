import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  a {
    position: absolute;
    top: 40px;
  }

  h1 {
    color: #FFFFFF;
    font-size: 22px;

    span {
      font-size: 36px;
      color: #FECA1B;
    }
  }
`;
