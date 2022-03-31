import styled from "styled-components";

export const BannerHomeContainer = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin-bottom: 2.81rem;
`

export const BannerHomeContent = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .bannerhome__txt {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
    text-shadow: 5px 3px 5px rgb(0,0,0,.5);

    a { 
      background-color: ${({ theme }) => theme.primary};
      width: max-content;
      color: ${({ theme }) => theme.white};
      text-shadow: none;
      text-transform: uppercase;
      font-family: 'Mulish', sans-serif;
      font-size: 1.12rem;
      padding: 15px 25px;
    }
  }

  p {
    font-family: 'Mulish', sans-serif;
    font-size: 1.12rem;
  }
  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 5rem;

    span {
      font-family: 'Oswald', sans-serif;
      color: ${({ theme }) => theme.primary};
    }
  }
`

export const BannerContactContainer = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`

export const BannerContactContent = styled.div`
  .bannerContact__txt {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;    

    p {
      color: ${({ theme }) => theme.white};
      font-size: 5rem;
      font-family: 'Oswald', sans-serif;

      span {
        color: ${({ theme }) => theme.primary};
        font-family: 'Oswald', sans-serif;
      }
    }
  }
`

export const BannerNewsContainer = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`

export const BannerNewsContent = styled.div`
  .bannerNews__txt {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;    

    p {
      color: ${({ theme }) => theme.white};
      font-size: 5rem;
      font-family: 'Oswald', sans-serif;

      span {
        color: ${({ theme }) => theme.primary};
        font-family: 'Oswald', sans-serif;
      }
    }
  }
`