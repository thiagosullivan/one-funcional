import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';

import { BlogHomeContainer, BlogHomeContent, PostCardHome, PostCardImage, PostsHomeContainer } from './styles';

function BlogHome({posts}) {
  return (
    <BlogHomeContainer>
      <BlogHomeContent>
        <h2>Notícias e artigos</h2>
        <p className='subtitle__section'>Nossas postagens mais recentes</p>
        <PostsHomeContainer>
          {posts.slice( 0, 3 ).map( (publi, index) => {
            return (
              <PostCardHome key={index}>
                <PostCardImage
                  postCardImg={publi.postImg.url}
                />
                {/* <div className='postcard__img' postImg={publi.postImg.url}>
                  <Image
                    src={publi.postImg.url}
                    layout="responsive"
                    className='image__post__home'
                    alt={publi.title}
                    width={415}
                    height={280}
                  />
                </div> */}
                <div className='post__home__infosbottom'>
                  <h4>{publi.title.length > 85 ? publi.title.substr(0, 85) + "..." : publi.title}</h4>
                  <p>{publi.resume.length > 150 ? publi.resume.substr(0, 150) + "..." : publi.resume}</p>
                  <div className='postcard__bottom'>
                    <div className='postcard__date'>
                      <span>{new Date(publi.createdAt).toLocaleDateString("pt-BR", {day: "2-digit"})}</span>
                      <span>{new Date(publi.createdAt).toLocaleDateString("pt-BR", {month: "short"})}</span>
                      <span>{new Date(publi.createdAt).toLocaleDateString("pt-BR", {year: "numeric"})}</span>
                    </div> 
                    <Link href={`blog/${publi.slug}`} passHref>
                      <a>
                        Leia Mais
                        <BsArrowRightShort />
                      </a>
                    </Link>
                  </div>
                </div>
              </PostCardHome>
            )
          })}
        </PostsHomeContainer>
        <Link href="/blog">
          <a className="postcontainer__btn">
            Mais notícias
          </a>
        </Link>
      </BlogHomeContent>
    </BlogHomeContainer>

    
  )
}

export default BlogHome