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
        <title>Contato | One Funcional</title>
        <meta name="description" content="A Funcional One vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        
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