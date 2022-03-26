import styled from "styled-components";

export const WhyChoseUsContainer = styled.section`
  background-color: ${({theme}) => theme.secondary};
  padding: 6.8rem 0;
`;

export const WhyChoseUsContent = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;

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
`;
export const WhyChoseUsBottom = styled.div`
  display: flex;
  justify-content: space-between;

  .whychose__card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 220px;
    width: 100%;
    color: ${({theme}) => theme.white};
    margin: 0 .5rem;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));

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
      margin-bottom: 1.25rem;
      min-height: 50px;
      line-height: 1.3;
    }
    p {
      font-family: 'Mulish', sans-serif;
      font-size: 0.87rem;
      text-align: center;
      font-weight: 400;
      text-transform: inherit;
    }
  }
`;