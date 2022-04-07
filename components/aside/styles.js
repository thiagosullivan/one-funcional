import styled from "styled-components";

export const AsideContainer = styled.aside`
  max-width: 485px;
  width: 100%;

  @media screen and (max-width: 1150px){
    max-width: 400px;
  }

  @media screen and (max-width: 980px){
    max-width: 300px;
  }

  @media screen and (max-width: 840px){
    max-width: 750px;
    margin: 0 auto 3rem;
  }
`;

export const CategoriesAside = styled.div`
  background-color: ${({theme}) => theme.third};
  padding: 2.25rem;
  box-shadow: 0px 10px 10px rgba(211, 211, 211, 0.7);
  
  p {
    color: ${({theme}) => theme.greysecond};
    font-size: 1.87rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }

  ul {    
    li {
      border-bottom: 1px solid ${({theme}) => theme.greysecond};
      padding-bottom: 1rem;
      margin-bottom: 1.56rem;

      &:last-child {
        margin-bottom: 2rem;
      }

      a {
        font-family: 'Mulish', sans-serif;
      }
    }
  }

  a {
    color: ${({theme}) => theme.greysecond};
  }

  @media screen and (max-width: 980px){
    padding: 1rem 1.5rem;
  }

  @media screen and (max-width: 840px){
    p {
      margin-bottom: 1rem;
      text-align: center;
    }

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap; 

      li {
        margin: 0 10px 1rem;
        padding: 0;
        border-bottom: none;
        border-right: 1px solid ${({theme}) => theme.greysecond};
        padding-right: 10px;

        &:last-child {
          margin-bottom: 0;
          padding-right: 0;
          border-right: none;
        }
      }
    }
  }
`;