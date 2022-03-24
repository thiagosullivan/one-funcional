import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AboutUs from '../components/aboutUs';
import BannerHome from '../components/banners/bannerHome';
import Header from '../components/header';
import WhyChoseUs from '../components/whyUs';
import { getAllPosts } from '../lib/dato-cms';

export default function Home({ posts }) {

  console.log(posts)

  return (
    <div>
      <Head>
        <title>One Funcional</title>
        <meta name="description" content="A Funcional One vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        
      </Head>

      <Header />
      <main>
        <BannerHome />
        <AboutUs />
        <WhyChoseUs />
        {/* {posts.map( (publi, index) => {
          return (
            <div key={index}>
              <Link href={`blog/${publi.slug}`} passHref>{publi.title}</Link>
            </div>
          )
        })} */}
      </main>

      <footer>        
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts || []
    },
    revalidate: 120,
  }
}
