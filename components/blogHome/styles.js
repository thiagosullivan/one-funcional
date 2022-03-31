import styled from "styled-components";

export const BlogHomeContainer = styled.section`
  background-color: ${({theme}) => theme.third};
`;

export const BlogHomeContent = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 6.8rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.25rem;
    font-family: 'Mulish', sans-serif;
    color: ${({theme}) => theme.primary};
    text-transform: uppercase;
    text-align: center;
  }

  .subtitle__section {
    font-size: 3rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    color: ${({theme}) => theme.white};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3.75rem;
  }

  .postcontainer__btn {
    border: 2px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    padding: 0.93rem 3.75rem;
    text-transform: uppercase;
    font-family: 'Mulish', sans-serif;
    font-weight: bold;
    transition: all 150ms ease-in-out;
    
    &:hover {
      background-color: ${({theme}) => theme.primary};
      color: ${({theme}) => theme.secondary};
    }
  }
`;

export const PostsHomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const PostCardHome = styled.div`
  max-width: 415px;
  width: 100%;
  min-height: 560px;
  margin: 1rem;

  .postcard__img {
    max-width: 515px;
    width: 100%;
    position: relative;
  }

  .post__home__infosbottom {
    padding: 1.5rem;
    border-right: 2px solid ${({theme}) => theme.primary};
    border-bottom: 2px solid ${({theme}) => theme.primary};
    border-left: 2px solid ${({theme}) => theme.primary};    
    background-color: ${({theme}) => theme.white};

    h4 {
      font-size: 1.2rem;
      font-family: 'Oswald', sans-serif;
      font-weight: bold;
      color: ${({theme}) => theme.secondary};
      text-transform: uppercase;
      min-height: 55px;
      margin-bottom: 1rem;
    }
  
    p {
      color: ${({theme}) => theme.greythird};
      font-size: 1rem;
      font-family: 'Mulish', sans-serif;
      font-weight: 400;
      margin-bottom: 5rem;
      text-align: justify;
    }

    .postcard__bottom {
      display: flex;
      justify-content: space-between;
      text-transform: uppercase;
      
      .postcard__date {        
        span {
          font-family: 'Mulish', sans-serif !important;
          color: ${({theme}) => theme.secondary};
          margin-right: 5px;
        }
      }

      a {
        font-family: 'Mulish', sans-serif !important;
        font-weight: bold;
        color: ${({theme}) => theme.primary};
        display: flex;
        align-items: center;

        svg {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }
    }
  }

`;