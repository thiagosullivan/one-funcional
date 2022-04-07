import styled from "styled-components";

export const BlogPageContainer = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 6.75rem auto 6.75rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 1rem;
  
  @media screen and (max-width: 840px){
    flex-direction: column-reverse;
    margin: 3rem auto;
  }
`