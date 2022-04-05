import Head from 'next/head';
import React from 'react';
import BannerContact from '../components/banners/bannerContact';
import ContactUs from '../components/contact';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Contact() {
  return (
    <div id="contact__page">
      <Head>        
        {/* Primary Meta Tags */}
        <title>Contato | ONE Funcional</title>
        <meta name="description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        <meta name="title" content="Contato | ONE Funcional"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://onefuncional.com.br"/>
        <meta property="og:title" content="Contato | ONE Funcional"/>
        <meta property="og:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="og:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://onefuncional.com.br"/>
        <meta property="twitter:title" content="Contato | ONE Funcional"/>
        <meta property="twitter:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="twitter:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"></meta>
      </Head>

      <Header />
      <main>
        <BannerContact />
        <ContactUs />
      </main>

      <Footer />
    </div>
  )
}