import styled from "styled-components";

export const YourBMIContainer = styled.section`
  background-image: url(${props => props.brUrl});
  max-height: 1000px;
`;

export const YourBMIContent = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 10rem 1rem;

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
  }
`;

export const BMICalculatorContainer = styled.section`
  border: 1px solid ${({theme}) => theme.primary};
  background-color: ${({theme}) => theme.secondary};
  padding: 3.1rem;
  
  max-width: 850px;
  width: 100%;

  .bmi__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
  }

  form {

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

  }

  .bmi__note {
    font-size: 0.75rem;
    color: ${({theme}) => theme.white};
    font-family: 'Mulish', sans-serif;
    text-align: justify;
    font-weight: bold;
  }
`;