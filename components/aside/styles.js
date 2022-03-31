import styled from "styled-components";

export const AsideContainer = styled.aside`
  max-width: 485px;
  width: 100%;
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
`;