import styled from "styled-components";

export const SearchAsideContainer = styled.div`
  background-color: ${({theme}) => theme.third};
  padding: 2.25rem;
  margin-bottom: 3.1rem;
  box-shadow: 0px 10px 10px rgba(211, 211, 211, 0.7);
`;

export const SearchAsideContent = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  .aside__input__container {
    position: relative;
    width: 100%;
    border: 2px solid ${({theme}) => theme.primary};
    margin-bottom: 1.25rem;

    input {
      background-color: transparent;
      width: 100%;
      height: 50px;
      border: none;
      color: ${({theme}) => theme.greysecond};
      font-family: 'Mulish', sans-serif;
      font-weight: bold;
      font-size: 1.12rem;
      padding-left: 1rem;

      &::placeholder {
        font-family: 'Mulish', sans-serif;
        font-weight: bold;
        font-size: 1.12rem;
        color: ${({theme}) => theme.greysecond};
      }
    }

    svg {
      position: absolute;
      color: ${({theme}) => theme.greysecond};
      right: 15px;
      top: 13px;
      font-size: 20px;
    }
  }

  button {
    background-color: ${({theme}) => theme.primary};
    width: 100%;
    height: 50px;
    border: 1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
    font-size: 1.12rem;
    font-family: 'Mulish', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const SearchHeaderContainer = styled.div`
  background-color: rgba(0,0,0,.9);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const SearchHeaderContent = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 150ms ease-in;

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