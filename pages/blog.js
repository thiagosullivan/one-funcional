import Head from 'next/head';
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Blog() {
  return (
    <div id="blog__page">
      <Head>
        <title>Blog | One Funcional</title>
        <meta name="description" content="A Funcional One vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        
      </Head>

      <Header />
      <main>
        {/* <BannerHome />    */}
      </main>

      <Footer />
    </div>
  )
}