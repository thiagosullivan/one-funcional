import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { getAllCategories, getAllPosts } from "../lib/dato-cms";

import Header from '../components/header';
import HeaderMobile from '../components/headerMobile';
import BannerCategories from '../components/banners/bannerCategories';
import PostCardResults from '../components/postCardResults';
import Aside from '../components/aside';
import Footer from '../components/footer';

import { ResultContainerPage, ResultPage } from '../styles/resultPage';

export async function getStaticProps() {
  const posts = (await getAllPosts()) || [];
  const categories = (await getAllCategories() || []);

  return {
    props: { posts, categories }
  }
}

function ResultsPage({ posts, categories }){
  // console.log(posts, 'POSTS result page')

  const router = useRouter()
  const searchQuery = router.query.s
  // console.log(searchQuery, 'QUERY')

  const itensFiltrados = posts.filter(({ categories }) => categories.some(({ slug }) => slug.includes(searchQuery)));
  
  let filteredPosts = itensFiltrados  
  // console.log(filteredPosts, 'FUNCTION OUT')

  return (
    <ResultPage id="result__page">
      <Head>
        {/* Primary Meta Tags */}
        <title>Categorias | ONE Funcional</title>
        <meta name="description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        <meta name="title" content="Categorias | ONE Funcional"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://onefuncional.com.br"/>
        <meta property="og:title" content="Categorias | ONE Funcional"/>
        <meta property="og:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="og:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://onefuncional.com.br"/>
        <meta property="twitter:title" content="Categorias | ONE Funcional"/>
        <meta property="twitter:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="twitter:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"></meta>
      </Head>

      <Header />
      <HeaderMobile />
      <BannerCategories categories={categories} />
      <main>
        <ResultContainerPage>
          {filteredPosts.length === 0 && (
            <div className='Search__error'>
              <p>Desculpe, mas nenhuma publicação foi encontrada nessa busca.</p>
              <Link href="/">Voltar para a Home</Link>
            </div>
          )}
          <PostCardResults postagens={filteredPosts} />
        </ResultContainerPage>
        <Aside categories={categories}/>
      </main>

      <Footer />
    </ResultPage>
  )
}

export default ResultsPage;