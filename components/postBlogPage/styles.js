import styled from "styled-components";

export const PostColContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 750px;
  width: 100%;
  margin-bottom: 6.25rem;
`; 

export const PostColContent = styled.section`
  max-width: 750px;
  width: 100%;
  margin-bottom: 6.25rem;

  h1 {
    font-size: 1.5rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    color: ${({theme}) => theme.secondary};
    margin: 1.87rem 0;
  }

  .post__infos__top {
    display: flex;
    align-items: center;
    margin-bottom: 3.75rem;

    .post__date {
      background-color: ${({theme}) => theme.primary};
      margin-right: 1.87rem;
      padding: 10px;
      border-radius: 10px;

      span {
        font-size: 1.25rem;
        font-family: 'Mulish', sans-serif;
        margin-right: 5px;

        &:last-child {
          margin-right: 0px;
        }
      }
    }

    .post__infos__author {
      display: flex;
      align-items: center;
      margin-right: 1.87rem;
    }

    .post__infos__categories {
      display: flex;
      align-items: center;

      div {
        font-family: 'Mulish', sans-serif;

        &:after {
          content: '|';
          padding-left: .6rem;
          margin-right: .6rem;
        }

        &:last-child {
          &:after {
            content: '';
          }
        }
      }

      svg {
        font-size: 1.12rem;
        margin-right: 1rem;
      }
    }
  }

  .post__text {

    p, strong, em, blockquote {
      font-family: 'Mulish', sans-serif;
      font-size: 1.1rem;
      text-align: justify;
      color: ${({theme}) => theme.secondary};
    }

    p {
      margin-bottom: 1rem;
      line-height: 1.5;
    }
    
    blockquote {
      background-color: ${({theme}) => theme.grey};
      padding: 1rem;
      margin: 2rem 0;

      p {
        background-color: ${({theme}) => theme.white};
        margin-bottom: 0;
        border-left: 3px solid ${({theme}) => theme.secondary};
        padding: 1rem;
        
        &:before {
          content: '"';
          font-size: 1.4rem;
          font-weight: bold;
          margin-right: .5rem;
        }

        &:after {
          content: '"';
          font-size: 1.4rem;
          font-weight: bold;
          margin-left: .5rem;
        }
      }
    }
  }
`;

export const AuthorPostImage = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${props => props.authorPhotoUrl});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-right: .7rem;
`

export const PostColContentImage = styled.div`
  max-width: 750px;
  width: 100%;
  height: 375px;
  background-image: url(${props => props.postContentImage});
  background-size: cover;
  background-position: center;
`