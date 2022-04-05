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
        {/* Primary Meta Tags */}
        <title>Blog | ONE Funcional</title>
        <meta name="description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        <meta name="title" content="Blog | ONE Funcional"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://onefuncional.com.br"/>
        <meta property="og:title" content="Blog | ONE Funcional"/>
        <meta property="og:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="og:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://onefuncional.com.br"/>
        <meta property="twitter:title" content="Blog | ONE Funcional"/>
        <meta property="twitter:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="twitter:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"></meta>
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