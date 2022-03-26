import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: rgba(0,0,0,.7);
  position: fixed;
  width: 100%;
  z-index: 3;
  padding: 1rem;
  border-bottom: 1px solid ${({theme}) => theme.primary};
`;

export const HeaderContent = styled.div`
  max-width: 1730px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo__header {
    cursor: pointer;
  }
`;

export const NavigationHeader = styled.nav`
  ul {
    display: flex;
    align-items: center;

    a {
      font-size: 16px;
      color: ${({ theme }) => theme.white};
      text-transform: uppercase;
      padding: 0 25px;
      font-family: 'Oswald', sans-serif;
      transition: all 150ms ease-in;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

export const SearchSocial = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.white};

  .search__header, .socialmedia__header {
    cursor: pointer;
    font-size: 1rem;
  }
  
  .search__header {
    padding-right: 15px;
    border-right: 1px solid ${({ theme }) => theme.white};

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  .socialmedia__header svg {
    margin: 0 15px;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;