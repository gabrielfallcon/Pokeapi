import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .card {
    width: 150px;
    height: 200px;
    background: #EF5350;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;

    & + .card {
      margin-top: 24px;
    }

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

      a {
        width: 75px;
        height: 25px;
        background: #263238;
        color: #FFFFFF;
        border-radius: 6px;
        align-self: flex-end;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 1110px;
    margin: 0 auto;

    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 
      "card card card card card";
    grid-gap: 30px;

    .card {
      margin-top: 0 !important;
      transition: .3s;

      &:only-child {
        grid-area: card;

      }

      &:hover{
        cursor: pointer;
        margin-top: -15px !important;
      }

    }
  }
`;
