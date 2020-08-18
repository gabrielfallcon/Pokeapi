import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    width: 150px;
    height: 200px;
    background: #EF5350;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;

    .card__img {
      width: 120px;
      height: 120px;
      background: #FFFFFF;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      margin-bottom: 8px;

      img {
        width: 100%;
        max-width: 90px;
      }
    }
    .card__description {
      width: 120px;
      display: flex;
      align-items: center;
      flex-direction: column;

      h4 {
        font-size: 12px;
        font-weight: 400;
        align-self: flex-start;
        margin-bottom: 15px;

        span {
          font-weight: 600;
        }
      }

      button {
        width: 75px;
        height: 25px;
        background: #263238;
        color: #FFFFFF;
        border-radius: 6px;
        align-self: flex-end;

      }
    }
  }
`;
