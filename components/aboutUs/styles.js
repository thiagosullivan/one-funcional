import styled from "styled-components";

export const AboutUsContainer = styled.section`
  padding: 3rem 2rem 9.3rem;
  
  @media screen and (max-width: 980px){
    padding: 3rem 2rem;
  }
`;

export const AboutUsTop = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1170px){
    align-items: flex-end;
  }

  @media screen and (max-width: 980px){
    img {
      display: none !important;
    }
  }

`;

export const AboutUsBottom = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  justify-content: space-around;
  padding: 1.68rem 0;
  position: relative;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));

  &::after {
    z-index: 1;
    position: absolute;
    top: 0;
    left: -25px;
    bottom: 0;
    content: '';
    width: 70px;
    transform: skew(-15deg);
    background-color: ${({ theme }) => theme.primary};

    @media screen and (max-width: 980px){
      left: -33px;
    }

    @media screen and (max-width: 720px){
      height: 50px;
      width: 70%;
      top: unset;
      left: 50%;
      bottom: -20px;
      transform: translateX(-50%) skew(-15deg);
    }
  }

  @media screen and (max-width: 1420px){
    width: 97%;
    margin-left: 2rem;
    padding-left: 1rem;
  }

  @media screen and (max-width: 980px){
    padding: 2rem 2rem 3rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 720px){
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
  }

  .specialization__aboutus {
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 980px){
      max-width: 150px;
      text-align: center;
      margin: 0 .5rem;
    }

    @media screen and (max-width: 720px){
      margin: 1.5rem .5rem;
      max-width: unset;
    }

    .specialization__number {
      color: ${({ theme }) => theme.white};
      border: 5px solid ${({ theme }) => theme.white};
      border-radius: 50%;
      width: 72px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.62rem;

      span {
        font-size: 1.5rem;        
      }
    }

    h4 {
      color: ${({ theme }) => theme.primary};
      text-transform: uppercase;
      margin-bottom: 0.62rem;
    }
    p {
      color: ${({ theme }) => theme.white};
    }
  }
`;

export const AboutUsText = styled.div`
  max-width: 550px;
  width: 100%;
  margin-left: 4.3rem;

  span {
    font-size: 1.25rem;
    font-family: 'Mulish', sans-serif;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    margin-bottom: 0.31rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-family: 'Oswald', sans-serif;
    margin-bottom: 1.56rem;

    span {
      color: ${({ theme }) => theme.primary};
      font-size: 2.5rem;
      font-family: 'Oswald', sans-serif;
    }
  }

  p {
    font-family: 'Mulish', sans-serif;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.secondary};
    text-align: justify;
    line-height: 1.3;
  }

  @media screen and (max-width: 1170px){
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 980px){
    max-width: unset;
    margin-left: 0;
  }

  @media screen and (max-width: 500px){
    h2, p, div:first-child {
      text-align: center;
    }
    div:first-child {
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 2rem;
      
      span {
        font-size: 2rem;
      }
    }
  }
`;

export const AboutUsList = styled.ul`
  margin-top: 4.3rem;
  
  li {
    font-family: 'Mulish', sans-serif;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.secondary};
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: 0.62rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.8rem;
    margin-right: 0.93rem;
  }

  @media screen and (max-width: 500px){
    li {
      text-align: left;
      align-items: flex-start;

      p {
        text-align: left;
        font-size: 1rem;
      }
    }
  }
`;

