import styled from "styled-components";

export const WhyChoseUsContainer = styled.section`
  background-color: ${({theme}) => theme.secondary};
  padding: 6.8rem 0;

  @media screen and (max-width: 500px){
    padding: 3rem 0;
  }
`;

export const WhyChoseUsContent = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;  
  padding: 0 1rem;

  h2 {
    font-size: 2.25rem;
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    color: ${({theme}) => theme.primary};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.92rem;
  }

  p {
    font-size: 2.25rem;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    color: ${({theme}) => theme.white};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3.1rem;
  }

  @media screen and (max-width: 500px){
    h2, p {
      font-size: 1.7rem;
    }
  }
`;

export const WhyChoseUsBottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 980px) {
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 700px;
    margin: 0 auto;
  }

  @media screen and (max-width: 570px) {
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
  }

  .whychose__card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 240px;
    width: 100%;
    color: ${({theme}) => theme.white};
    margin: 0 .5rem;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));

    @media screen and (max-width: 540px) {
      h4 {
        min-height: unset !important;
        margin-bottom: 1.3rem !important;
      }
    }

    .whychose__icon {
      background-color: ${({theme}) => theme.primary};
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.93rem;
    }

    h4 {
      font-family: 'Oswald', sans-serif;
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: .5rem;
      min-height: 65px;
      line-height: 1.3;
    }
    p {
      font-family: 'Mulish', sans-serif;
      font-size: 0.87rem;
      text-align: center;
      font-weight: 400;
      text-transform: inherit;
      min-height: 120px;
    }

    @media screen and (max-width: 980px) {
      margin: 0 .8rem;
    }
  }
`;