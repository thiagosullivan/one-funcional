import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import BannerHome from '../components/banners/bannerHome';
import Header from '../components/header';
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
        <h1>One Funcional</h1>
        {posts.map( (publi, index) => {
          return (
            <div key={index}>
              <Link href={`blog/${publi.slug}`} passHref>{publi.title}</Link>
            </div>
          )
        })}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
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
