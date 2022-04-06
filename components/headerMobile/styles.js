import styled from "styled-components";

export const HeaderMobileContainer = styled.header`
  background-color: rgba(0,0,0,.9);
  position: fixed;
  width: 100%;
  z-index: 3;
  padding: .5rem 1rem;
  border-bottom: 1px solid ${({theme}) => theme.primary};
  display: none;

  @media screen and (max-width: 980px) {
    display: block;
  }
`;

export const HeaderMobileContent = styled.div`
  max-width: 1730px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo__header {
    cursor: pointer;
  }

  .mobile__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn__header {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      cursor: pointer;
      transition: all 500ms ease-in-out;
    }

    .hamburger__header {
      width: 40px;
      height: 3px;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 2px solid rgba(0, 0, 0, .7);
      transition: all 500ms ease-in-out;

      &:before {
        content: '';
        position: absolute;
        width: 40px;
        height: 3px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 2px solid rgba(0, 0, 0, .7);
        transition: all 500ms ease-in-out;
        transform: translateY(-13px);
      }

      &:after {
        content: '';
        position: absolute;
        width: 40px;
        height: 3px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 2px solid rgba(255, 101, 47, .2);
        transition: all 500ms ease-in-out;
        transform: translateY(13px);
      }

    }

    .menuOpen .hamburger__header {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
    }
    .menuOpen .hamburger__header::before{
      transform: rotate(45deg) translate(35px, -35px);
    }
    .menuOpen .hamburger__header::after{
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }

  .HeaderMobileNavigation {
    height: 0;
    overflow-y: hidden;
    transition: all 500ms ease-in-out;
    display: block;
    visibility: hidden;
  }
  .menuOpen.HeaderMobileNavigation {
    height: 100vh;
    overflow-y: auto;   
    visibility: visible;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const NavigationHeader = styled.nav`
  margin-bottom: 2.5rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      padding: 15px 25px;
      
      a {
        font-size: 24px;
        color: ${({ theme }) => theme.white};
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
        transition: all 150ms ease-in;
  
        &:hover {
          color: ${({ theme }) => theme.primary};
        }
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
    font-size: 1.7rem;
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