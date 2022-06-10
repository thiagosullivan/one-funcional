import styled from "styled-components";

export const YourBMIContainer = styled.section`
  background-image: url(${props => props.brUrl});
  max-height: 1000px;

  @media screen and (max-width: 1170px){
    background-position: center;
    background-size: cover;
  }

  @media screen and (max-width: 660px){
    max-height: unset;
  }
`;

export const YourBMIContent = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 1rem;

  h2 {
    font-size: 5rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    color: ${({theme}) => theme.white};
    text-transform: uppercase;
    margin-bottom: 1.87rem;

    span {
      font-size: 5rem;
      font-family: 'Oswald', sans-serif;
      font-weight: bold;
      color: ${({theme}) => theme.primary};
    }

    @media screen and (max-width: 980px){
      text-align: center;
      font-size: 3rem;

      span {
        font-size: 3rem;
      }
    }
  }

  @media screen and (max-width: 980px){
    padding: 5rem 1rem;
  }
`;

export const BMICalculatorContainer = styled.section`
  border: 1px solid ${({theme}) => theme.primary};
  background-color: ${({theme}) => theme.secondary};
  padding: 3.1rem;
  max-width: 850px;
  width: 100%;

  @media screen and (max-width: 980px){
    margin: 0 auto;
  }

  @media screen and (max-width: 450px){
    padding: 2rem 1rem;
  }

  .bmi__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    @media screen and (max-width: 660px){
      flex-direction: column;
    }
  }

  form {
    margin-right: 2rem;

    .calculator__input {
      color: ${({theme}) => theme.white};
      font-family: 'Mulish', sans-serif;
      font-size: 1.5rem;
      font-weight: 400;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.8rem;

      span {
        margin-bottom: 0.91rem;
        letter-spacing: 4px;
      }

      input {
        border: 1px solid ${({theme}) => theme.primary};
        background-color: transparent;
        color: ${({theme}) => theme.white};
        max-width: 325px;
        width: 100%;
        height: 70px;
        font-size: 1.5rem;
        font-family: 'Mulish', sans-serif;
        padding-left: 1rem;
      }

      input[type='number'] {
        -moz-appearance:textfield;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }

    button {
      max-width: 325px;
      width: 100%;
      height: 70px;
      background-color: ${({theme}) => theme.primary};
      border: none;
      font-size: 1.5rem;
      color: ${({theme}) => theme.secondary};
      font-weight: bold;
      text-transform: uppercase;
    }

    @media screen and (max-width: 775px){
      .calculator__input {
        input {
          height: 50px;
        }
      }
      button {
        height: 50px;
      }
    }

    @media screen and (max-width: 660px){
      margin-bottom: 2rem;
      margin-right: 0;

      .calculator__input {
        input {
          max-width: unset;
        }
      }
      button {
        max-width: unset;
        font-size: 1.2rem;
      }
    }

    @media screen and (max-width: 500px){
      span {
        font-size: 1rem;
      }
    }
  }

  .calculator__result {
    max-width: 315px;
    width: 100%;
    color: ${({theme}) => theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Mulish', sans-serif;

    h4 {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 1.8rem;
    }

    .calculator__number {
      font-size: 3.4rem;
      font-weight: bold;
      margin-bottom: .3rem;
      min-height: 65px;
    }

    .calculator__explanation {
      text-align: justify;
      font-size: 0.87rem;
      font-weight: 400;
      line-height: 1.5;
      
      p {
        &:first-child {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
        }
      }
    }

    @media screen and (max-width: 760px){
      max-width: 250px;
    }

    @media screen and (max-width: 660px){
      margin: 0 auto;
      max-width: unset;
    }
  }

  .bmi__note {
    font-size: 0.75rem;
    color: ${({theme}) => theme.white};
    font-family: 'Mulish', sans-serif;
    text-align: justify;
    font-weight: bold;
  }
`;