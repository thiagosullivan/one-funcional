import { darken } from 'polished';
import styled from "styled-components";

export const OurTeamContainer = styled.section`
  padding: 6.8rem 0;

  @media screen and (max-width: 500px){
    padding: 3rem 0;
  }
`;

export const OurTeamContent = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  h2 {
    color: ${({theme}) => theme.primary};
    font-size: 2.25rem;
    font-family: 'Mulish', sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.93rem;
  }

  .ourTeam__subtitle {
    color: ${({theme}) => theme.secondary};
    font-size: 2.25rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 500px){
    h2, .ourTeam__subtitle {
      font-size: 1.7rem;
    }
    .ourTeam__subtitle {
      margin-bottom: 2.3rem;
    }
  }
`;

export const OurTeamSlider = styled.div`

  p {
    color: ${({theme}) => theme.secondary};
    font-family: 'Mulish', sans-serif;
    font-size: 1.12rem;
    margin-bottom: 3.7rem;
    text-align: center;
  }
`;

export const SliderContainer = styled.div`
  padding: 0 3rem;

  @media screen and (max-width: 1300px) {
     button.slick-next {
      right: -5px !important;
    }
  }

  @media screen and (max-width: 1300px) {
     padding-right: 2rem;
  }

  @media screen and (max-width: 980px) {
     max-width: 800px;
     margin: 0 auto;
  }

  @media screen and (max-width: 700px) {
     max-width: 400px;
     margin: 0 auto;
  }

  .slick-prev {
    left: -45px !important;
    
    &:before {
      display: block;
      content: '';
      background-image: url(${props => props.iconLeft}) !important;
      width: 40px;
      height: 40px;
      background-size: 40px 40px;
      color: red;
    }
  }
  .slick-next {
    right: 25px !important;

    &:before {
      display: block;
      content: '';
      background-image: url(${props => props.iconRight}) !important;
      width: 40px;
      height: 40px;
      background-size: 40px 40px;
      color: red;
    }
  }

  .slick-dots li.slick-active button:before {
    background-color: ${({theme}) => theme.primary};
  }

  .slick-dots li button:before {
    width: 40px;
    height: 10px;
    background-color: ${({theme}) => darken( 0.3, theme.primary)};
    content: '';
    margin-top: 10px;
  }

  .slick-dots li {
      margin: 0 15px;
  }
`;

export const TeamCard = styled.div`
  max-width: 360px;
  width: 100%;
  height: 440px;
  background-image: url(${props => props.teamPhoto});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  margin: 0 .5rem;
  /* filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.3)); */

  &:hover > {
    .teamCard__infos {
      transform: skew(0deg, -10deg) translateY(-75px);
    }
  }

  @media screen and (max-width: 1220px){
    max-width: 300px;
  }

  .teamCard__infos {
    width: 100%;
    background: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.white};
    border-top: 2px solid ${({theme}) => theme.primary};
    padding-top: 2rem;    
    position: absolute;
    bottom: -120px;
    transform: skew(0deg, -10deg) translateY(203px);
    transition: all 200ms ease-in-out;

    .teamCard__infos__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: skew(0deg, 10deg);

      p {
        color: ${({theme}) => theme.white};
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: .2rem;
      }
      
      .degrees {
        font-size: 0.86rem;
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
        padding: 0 25px 15px;
        text-align: center;
        min-height: 70px;
      }
      span {
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
        font-size: 0.87rem;
        margin-bottom: 1.5rem;
      }
  
      .teamCard__socialmedia {
        display: flex;
        align-items: center;
        padding-bottom: 4rem;

        a {
          margin: 0 10px;
          color: ${({theme}) => theme.primary};
          font-size: 1.2rem;
          transition: all 150ms ease-in-out;

          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
          &:hover {
            color: ${({theme}) => darken( 0.2, theme.primary)}
          }
        }

        .disable__socialmedia {
          pointer-events: none;
          color: ${({theme}) => darken( 0.2, theme.grey)};
        }
      }
    }
  }
`;