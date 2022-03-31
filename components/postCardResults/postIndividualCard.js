import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCategory } from "react-icons/bi";
import { AuthorPostImg, ImgPost, PostIndividualContainer } from './styles';

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
      <Link href={`blog/${postLink}`}>
        <a>
          <ImgPost imgUrl={imgLink.url}/>
          <div className='postcard__infos'>
            <div className='postcard__date'>
              <span>{new Date(date).toLocaleDateString("pt-BR", {day: "2-digit"})}</span>
              <span>{new Date(date).toLocaleDateString("pt-BR", {month: "short"})}</span>
            </div>
            <h3>{title}</h3>
            <div className='postcard__resume'>{resume}</div>
            <div className='postcard__infos__bottom'>
              <div className='postcard__categories'>
                <BiCategory />
                {categories.map((categories, index)=> {
                  return (
                    <div key={index}>{categories.categoryName}</div>
                  )
                })}
              </div>
              <div className='postcard__author'>
                <AuthorPostImg AuthorImgPost={authorPhoto.url}/>
                <p>{authorName}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </PostIndividualContainer>
  )
}

export default PostIndividualCard;