import React from 'react'
import { ImgPost, PostIndividualContainer } from './styles';

function PostIndividualCard({
  id,
  authorName,
  authorPhoto,
  date,
  categories,
  title,
  imgLink,
  postLink,
  resume,
  text }) {
  return (
    
    <PostIndividualContainer key={id}>
      <ImgPost imgUrl={imgLink.url}/>
      <div>
        <span>{new Date(date).toLocaleDateString("pt-BR", {day: "2-digit"})}</span>
        <span>{new Date(date).toLocaleDateString("pt-BR", {month: "short"})}</span>
      </div>
      <h3>{title}</h3>
      <div>{resume}</div>
      <div>
        {categories.map((categories, index)=> {
          return (
            <div key={index}>{categories.categoryName}</div>
          )
        })}
      </div>
      <div>
        <img src={authorPhoto.url} />
        <p>{authorName}</p>
      </div>
    </PostIndividualContainer>
  )
}

export default PostIndividualCard;