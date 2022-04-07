import { darken } from "polished";
import styled from "styled-components";

export const PostsBlogContainer = styled.div`

  max-width: 750px;
  width: 100%;
  margin-bottom: 6.25rem;
  margin-right: 2rem;

  @media screen and (max-width: 840px){
    margin: 0 auto 2rem;
  }

  .paginationBtns {
    color: ${({theme}) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;

      li {
        border: 1px solid ${({theme}) => theme.primary};
        width: 40px;
        height: 40px;        
        margin: 0 .7rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 150ms ease-in-out;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &:hover {
          color: ${({theme}) => darken(0.3, theme.primary)};
          border: 1px solid ${({theme}) => darken(0.3, theme.primary)};
        }

        &:first-child {
          border: none;
          margin: 0;
          font-size: 2rem;
          padding-top: 5px;
          
          &:hover {
            color: ${({theme}) => darken(0.3, theme.primary)};
          }
        }

        &:last-child {
          border: none;
          margin: 0;
          font-size: 2rem;
          padding-top: 5px;

          &:hover {
            color: ${({theme}) => darken(0.3, theme.primary)};
          }
        }
      }
      .paginationActive {
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
        pointer-events: none;
  
        &:hover {
          color: ${({theme}) => theme.white};
          border: 1px solid ${({theme}) => theme.primary};
        }
      }
  
      .paginationDisabled {
        pointer-events: none;
      }
  }
`

export const PostBlogIndividualContainer = styled.div`
  box-shadow: 0px 10px 20px 10px rgba(211, 211, 211, 0.2);
  margin-bottom: 6.25rem;

  @media screen and (max-width: 840px){
    margin-bottom: 3rem;
  }

  .postcard__infos {
    position: relative;
    padding: 2.43rem 1rem;    

    .postcard__date {
      background-color: ${({theme}) => theme.primary};
      width: 85px;
      height: 85px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 10px;
      position: absolute;
      top: -55px;
      left: 50px;
  
      span {
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size: 1.85rem;
        line-height: 1;
  
        &:last-child {
          font-weight: 400;
          font-size: 1.5rem;
          margin-bottom: -.5rem;
          text-transform: capitalize;
        }
      }

      @media screen and (max-width: 490px){
        width: 60px;
        height: 60px;
        top: -35px;
        left: 30px;

        span {
          font-size: 1.2rem;

          &:last-child {
            font-size: 1.2rem;
            margin-bottom: 0;
          }
        }
      } 
    }

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: 'Oswald', sans-serif;
      color: ${({theme}) => theme.secondary};
      margin-bottom: 1rem;
    }

    .postcard__resume {
      font-size: 1rem;
      color: ${({theme}) => theme.secondary};
      font-family: 'Mulish', sans-serif;
      margin-bottom: 2.5rem;

      @media screen and (max-width: 490px){
        text-align: justify;
      }
    }

    .postcard__infos__bottom {
      display: flex;
      align-items: center;

      .postcard__categories {
        display: flex;

        svg {
          margin-right: 1rem;
          font-size: 1.25rem;
        }

        div {
          font-family: 'Mulish', sans-serif;

          &::after {
            content: '|';
            margin: 0 10px;
          }
          &:last-child {
            &::after {
              content: '';
            }
          }
        }
      }

      .postcard__author {
        display: flex;
        align-items: center;
      }

      @media screen and (max-width: 490px){
        flex-direction: column;
        align-items: flex-start;

        .postcard__categories {
          margin-bottom: 1rem;
        }
      }
    }
    
  }

`

export const ImgPost = styled.div`
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 750px;
  height: 375px;

  @media screen and (max-width: 490px){
    max-width: 490px;
    height: 200px;
  }
`

export const AuthorPostImg = styled.div`
  background-image: url(${props => props.AuthorImgPost});
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 1rem;
`