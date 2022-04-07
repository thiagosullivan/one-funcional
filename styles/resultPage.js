import styled from "styled-components";


export const ResultPage = styled.div`
  main {
    max-width: 1300px;
    width: 100%;
    margin: 6.75rem auto 0;
    padding: 0 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media screen and (max-width: 840px){
    main {
      flex-direction: column-reverse;
      margin: 3rem auto;
    }
  }
  
`
export const ResultContainerPage = styled.div`
  margin-right: 2rem;

  @media screen and (max-width: 840px){
    margin: 0 auto;
    width: 100%;
  }
`
