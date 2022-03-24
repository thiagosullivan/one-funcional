import styled from "styled-components";

export const PostsContainer = styled.div`

`;

export const PostIndividualContainer = styled.div`

`;

export const ImgPost = styled.div`
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 750px;
  height: 375px;
`;