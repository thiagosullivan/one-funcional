import { darken, lighten } from "polished";
import styled from "styled-components";

export const OurPriceContainer = styled.section`
  background-color: ${({theme}) => theme.third};
  padding: 6.8rem 1rem 6.8rem ;
`;

export const OurPriceContent = styled.div`
  width: 100%;
  margin: 0 auto;

  h2 {
    font-size: 2.25rem;
    color: ${({theme}) => theme.primary};
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.93rem;
  }

  p {
    font-size: 2.25rem;
    color: ${({theme}) => theme.white};
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 4.3rem;
  }
`;

export const OurPriceCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1300px){
    padding: 0 1rem;
  }

  @media screen and (max-width: 980px){
    flex-wrap: wrap;
  }
`;

export const OurPriceCard = styled.div`
  background-color: ${({theme}) => theme.secondary};
  color: ${({theme}) => theme.white};
  border: 1px solid ${({theme}) => theme.primary};
  padding: 2.5rem 3.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;  
  max-width: 370px;
  width: 100%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  margin: 1rem .5rem;

  @media screen and (max-width: 1600px){
    max-width: 300px;
    padding: 2.5rem 1.75rem;
  }

  @media screen and (max-width: 1300px){
    max-width: 280px;
    padding: 2.5rem 1.75rem;    
  }

  @media screen and (max-width: 1225px){
    max-width: 270px;
    padding: 2.5rem 1rem;    
  }

  h4 {
    color: ${({theme}) => theme.primary};
    font-family: 'Mulish', sans-serif;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    text-align: center;
    min-height: 50px;

    @media screen and (max-width: 1100px){
      font-size: 1rem;
    }
  }

  .PriceCard__price {
    color: ${({theme}) => theme.white};    
    font-family: 'Mulish', sans-serif;
    font-size: 4rem;
    font-weight: bold;
    position: relative;
    margin-bottom: 3.1rem;

    span {
      color: ${({theme}) => theme.primary};
      font-size: 1.87rem;
      top: 10px;
      left: -20px;
      position: absolute;
    }
  }
  
  .PriceCard__list {
    font-family: 'Mulish', sans-serif;
    margin-bottom: 3.43rem;

    li {
      margin-bottom: 0.62rem;
      display: flex;
      align-items: center;
    }

    svg {
      color: ${({theme}) => theme.primary};
      font-size: 2rem;
    }
  }

  .PriceCard__button {
    width: 250px;
    height: 60px;
    background-color: ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.secondary};
    text-transform: uppercase;
    font-size: 1.12rem;
    font-weight: bold;
    font-family: 'Mulish', sans-serif;
    transition: all 150ms ease-in-out;

    &:hover {
      background-color: ${({theme}) => darken(0.1, theme.primary)};
      color: ${({theme}) => theme.white};
    }

    @media screen and (max-width: 1225px) {
      width: 200px;
    }
  }
`;

