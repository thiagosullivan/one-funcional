import React from 'react';
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import { BiCategory } from "react-icons/bi";

import { AuthorPostImage, PostColContainer, PostColContent } from './styles';

function PostBlogPage({ post }) {
  const str = post.videoUrl

  let mySubString

  if(str.includes('youtu.be')){
    mySubString = str.substring(
      str.indexOf(".be/") + 4,
      str.lastIndexOf("")
    );
  } else {
     mySubString = str.substring(
      str.indexOf("=") + 1,
      str.lastIndexOf("&")
    );
  }

  return (
    <PostColContainer>
      <PostColContent>
        <Image
          src={post.postImg.url}
          alt={post.title}
          layout="responsive"
          width={750}
          height={375}
        />
        <h1>{post.title}</h1>
        <div className='post__infos__top'>
          <div className='post__date'>
            <span>{new Date(post.createdAt).toLocaleDateString("pt-BR", {day: "2-digit"})}</span>
            <span>{new Date(post.createdAt).toLocaleDateString("pt-BR", {month: "short"})}</span>
            <span>{new Date(post.createdAt).toLocaleDateString("pt-BR", {year: "numeric"})}</span>
          </div>      
          <div className='post__infos__author'>            
            <AuthorPostImage className='author__Photo' authorPhotoUrl={post.author.authorPhoto.url} />
            <p>{post.author.authorName}</p>
          </div>
          <div className='post__infos__categories'>
            <BiCategory />
            {post.categories.map((categories, index)=> {
              return (
                <div key={index}>{categories.categoryName}</div>
              )
            })}
          </div>
        </div>
          
        <ReactMarkdown className='post__text'>{post.postTxt}</ReactMarkdown>
        {post.videoUrl ?
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${mySubString}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          : ''
        }
      </PostColContent>
    </PostColContainer>
  )
}

export default PostBlogPage