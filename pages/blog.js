import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import BannerNews from '../components/banners/bannerNews';
import Aside from '../components/aside';
import BlogPage from '../components/blogPage';
import Footer from '../components/footer';
import { getAllCategories, getAllPosts } from '../lib/dato-cms';
import { BlogPageContainer } from '../styles/blogPage';

export default function Blog({ posts, categories }) {
  return (
    <div id="blog__page">
      <Head>
        <title>Blog | One Funcional</title>
        <meta name="description" content="A Funcional One vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        
      </Head>

      <Header />
      <main>
        <BannerNews />
        <BlogPageContainer>
          <BlogPage postagens={posts}/>
          <Aside categories={categories}/>
        </BlogPageContainer>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getAllPosts()) || [];
  const categories = (await getAllCategories() || []);

  return {
    props: { posts, categories }
  }
}