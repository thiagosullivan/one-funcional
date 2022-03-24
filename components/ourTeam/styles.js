import styled from "styled-components";

export const OurTeamContainer = styled.section`
  padding: 6.8rem 0;
`;

export const OurTeamContent = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  
  h2 {
    color: ${({theme}) => theme.primary};
    font-size: 2.25rem;
    font-family: 'Mulish', sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.93rem;
  }

  .ourTeam__subtitle {
    color: ${({theme}) => theme.secondary};
    font-size: 2.25rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const OurTeamSlider = styled.div`

  p {
    color: ${({theme}) => theme.secondary};
    font-size: 1.12rem;
  }
`;