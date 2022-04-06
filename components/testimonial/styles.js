import { darken } from 'polished';
import styled from "styled-components";

export const TestimonalContainer = styled.section`
  padding: 6.8rem 0;

  @media screen and (max-width: 500px){
    padding: 3rem 0;
  }
`;

export const TestimonalContent = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;

  h2 {
    color: ${({theme}) => theme.primary};
    font-size: 2.25rem;
    font-family: 'Mulish', sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.93rem;
  }

  .testimonal__subtitle {
    color: ${({theme}) => theme.secondary};
    font-size: 2.25rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  @media screen and (max-width: 500px){
    h2, .testimonal__subtitle {
      font-size: 1.7rem;
    }
    .testimonal__subtitle {
      margin-bottom: 2.3rem;
    }
  }
`;

export const TestimonalSlider = styled.div`

  p {
    color: ${({theme}) => theme.secondary};
    font-family: 'Mulish', sans-serif;
    font-size: 1.12rem;
    margin-bottom: 3.7rem;
    text-align: center;
  }
`;

export const SliderContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0 1rem;

  @media screen and (max-width: 700px){
    width: 100%;
  }
  .slick-slider .slick-track {
    padding-top: 3rem;
  }
  .slick-prev {
    left: -35px !important;
    
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
    right: -35px !important;

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

  .slider__testimonial {
    margin-right: 20px;
  }

  @media screen and (max-width: 700px){
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;

export const TestimonialCard = styled.div`
  background-color: ${({theme}) => theme.third};
  color: ${({theme}) => theme.white};
  padding: 1.5rem;
  font-family: 'Mulish', sans-serif;
  position: relative;
  overflow: unset;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15);
  margin-right: 20px;

  .testimonial__opinion {
    color: ${({theme}) => theme.white};
    text-align: justify;
    padding-top: 1rem;
    margin-bottom: .5rem;
    font-size: 0.91rem;
    min-height: 150px;
    height: 100%;
  }

  .testimonial_quote {
    background-color: ${({theme}) => theme.primary};
    width: 50px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: ${({theme}) => theme.secondary};
    transform: skew(-15deg, 0deg) translateX(50%);
    position: absolute;
    top: -30px;
    right: 50%;
    z-index: 3;
  }

  .testimonial__infos {
    display: flex;
    align-items: center;

    .testimonial__infos__names {
      margin-left: 1.56rem;

      .testimonial__name {
        color: ${({theme}) => theme.primary};
        text-transform: uppercase;
        margin-bottom: 0.91rem;
        font-weight: bold;
        min-height: unset !important;
        text-align: left;

        @media screen and (max-width: 1250px){
          min-height: 44px !important;
        }

        @media screen and (max-width: 980px){
          min-height: unset !important;
        }

        @media screen and (max-width: 800px){
          min-height: 44px !important;
        }

        @media screen and (max-width: 700px){
          min-height: unset !important;
        }
      }

      p:last-child {
        color: ${({theme}) => theme.white};
        text-align: left;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.86rem;
        font-family: 'Mulish', sans-serif;
        min-height: 35px;
        margin-bottom: 0;

        @media screen and (max-width: 1080px){
          min-height: 51px;
        }
      }
    }
    
  }
`;