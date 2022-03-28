import styled from "styled-components";

export const AboutUsContainer = styled.section`
  padding: 7rem 0 9.3rem;
`;

export const AboutUsTop = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
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
}

  .specialization__aboutus {
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

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
`;

