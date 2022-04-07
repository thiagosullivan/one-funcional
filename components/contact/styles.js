import { darken } from "polished";
import styled from "styled-components";

export const ContactUsContainer = styled.section`
  padding: 0 0 0 1rem;

  iframe {
    margin-bottom: -4px;
  }

  @media screen and (max-width: 980px){
    padding: 0;
  }
`
export const ContactUsContent = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 1rem;

  @media screen and (max-width: 980px){
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 980px){
    padding: 0;
  }

  .contactus__colOne {
    margin-right: 1rem;

    h2 {
      font-size: 3rem;
      font-family: 'Oswald', sans-serif;
      color: ${({theme}) => theme.secondary};
      margin-bottom: 1.5rem;
      line-height: 1;
    }

    p {
      display: flex;
      align-items: center;
      font-family: 'Mulish', sans-serif;
      color: ${({theme}) => theme.secondary};
      margin-bottom: 1rem;

      svg {
        color: ${({theme}) => theme.primary};
        width: 40px;
        height: 40px;
        margin-right: 1rem;
      }
    }
  }
  .contactus__colTwo {
    background-color: ${({theme}) => theme.secondary};
    padding: 7.5rem 4.6rem;
    max-width: 800px;
    width: 100%;
    position: relative;

    h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 4rem;
      color: ${({theme}) => theme.white};
      text-transform: uppercase;
      margin-bottom: 2.8rem;
      text-align: center;
    }

    form {
      max-width: 725px;
      width: 100%;
      display: flex;
      flex-direction: column;

      .contactus__inputs {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      input {
        width: 49%;
        margin-bottom: 15px;
        height: 50px;
        border: 1px solid ${({theme}) => theme.primary};
        background: transparent;
        padding-left: 1.25rem;
        font-size: 1.5rem;
        color: ${({theme}) => theme.greysecond};
        font-family: 'Oswald', sans-serif;

        &::placeholder {
          font-size: 1.5rem;
          color: ${({theme}) => theme.greysecond};
          text-transform: uppercase;
        }
      }

      textarea {
        height: 250px;
        margin-bottom: 2.5rem;
        border: 1px solid ${({theme}) => theme.primary};
        background: transparent;
        padding-left: 1.25rem;
        padding-top: 1.25rem;
        font-size: 1.5rem;
        color: ${({theme}) => theme.greysecond};
        font-family: 'Oswald', sans-serif;
        resize: unset;

        &::placeholder {
          font-size: 1.5rem;
          color: ${({theme}) => theme.greysecond};
          text-transform: uppercase;
        }
      }

      button {
        height: 60px;
        width: 220px;
        background-color: ${({theme}) => theme.primary};
        border: 1px solid ${({theme}) => theme.primary};
        font-size: 1.12rem;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 150ms ease-in-out;

        &:hover {
          background-color: ${({theme}) => theme.secondary};
          color: ${({theme}) => theme.primary};
        }
      }
    }

    @media screen and (max-width: 1300px){
      max-width: 700px;
      h2 {
        font-size: 3rem;
      }
    }
    @media screen and (max-width: 1200px){
      max-width: 600px;
      padding: 2rem;      
    }
    @media screen and (max-width: 980px){
      max-width: unset;
      h2 {
        font-size: 1.6rem;
      }
      form {
        max-width: unset;

        input, text {
          font-size: 1.3rem;

          &::placeholder {
            font-size: 1.3rem;
          }
        }

        button {
          width: 100%;
        }
      }
    }
    @media screen and (max-width: 980px){
      form {
        .contactus__inputs{
          flex-direction: column;
          
          input {
            width: 100%;
          }
        }        
      }
    }
    @media screen and (max-width: 980px){
      padding: 2rem 1rem;
    }
  }

  @media screen and (max-width: 980px){
    flex-direction: column;

    .contactus__colOne {
      margin: 2rem 0;
      padding: 0 1rem;

      h2 {
        font-size: 2rem;
        text-align: center;
      }
    }
  }
`