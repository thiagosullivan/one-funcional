import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AboutUs from '../components/aboutUs';
import BannerHome from '../components/banners/bannerHome';
import BlogHome from '../components/blogHome';
import Footer from '../components/footer';
import Header from '../components/header';
import HeaderMobile from '../components/headerMobile';
import OurPrice from '../components/ourPricing';
import OurTeam from '../components/ourTeam';
import Testimonal from '../components/testimonial';
import WhyChoseUs from '../components/whyUs';
import YourBMI from '../components/yourBMI';
import { getAllPosts, getAllTeam } from '../lib/dato-cms';

export default function Home({ posts, team }) {

  // console.log(posts)
  // console.log(team, 'team')

  return (
    <div id="homepage">
      <Head>
        {/* Primary Meta Tags */}
        <title>ONE Funcional | Treinamento Funcional</title>
        <meta name="description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        <meta name="title" content="ONE Funcional | Treinamento Funcional"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://onefuncional.com.br"/>
        <meta property="og:title" content="ONE Funcional | Treinamento Funcional"/>
        <meta property="og:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="og:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://onefuncional.com.br"/>
        <meta property="twitter:title" content="ONE Funcional | Treinamento Funcional"/>
        <meta property="twitter:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="twitter:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"></meta>
      </Head>

      <Header />
      <HeaderMobile />
      <main>
        <BannerHome />
        <AboutUs />
        <WhyChoseUs /> 
        <OurPrice />
        <OurTeam team={team}/>
        <YourBMI />
        <Testimonal />
        <BlogHome posts={posts}/>      
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const team = await getAllTeam();

  return {
    props: {
      posts: posts || [],
      team: team || [],
    },
    revalidate: 120,
  }
}
