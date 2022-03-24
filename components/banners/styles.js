import styled from "styled-components";

export const BannerHomeContainer = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
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