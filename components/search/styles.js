import styled from "styled-components";

export const SearchAsideContainer = styled.div`

`;

export const SearchAsideContent = styled.form`

`;

export const SearchHeaderContainer = styled.div`
  background-color: rgba(0,0,0,.9);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const SearchHeaderContent = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  .closebtn__search__header {
    color: ${({ theme }) => theme.white};
    font-size: 1.5rem;
    position: absolute;
    top: -5rem;
    right: 0;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.primary}; 
    }
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.white};
    padding: .5rem 1rem;
    outline: none;
    color: ${({ theme }) => theme.white};
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;

    &::placeholder {
      color: ${({ theme }) => theme.white};
    }    
  }

  button {
    height: 80px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    &:hover > svg {
      color: ${({ theme }) => theme.primary}; 
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.white};      
    }

    
  }
`;