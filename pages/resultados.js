import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { getAllCategories, getAllPosts } from "../lib/dato-cms";

import Header from '../components/header';
import BannerHome from '../components/banners/bannerHome';
import Footer from '../components/footer';
import PostCardResults from '../components/postCardResults';
import Aside from '../components/aside';

import { ResultContainerPage, ResultPage } from '../styles/resultPage';

export async function getStaticProps() {
  const posts = (await getAllPosts()) || [];
  const categories = (await getAllCategories() || []);

  return {
    props: { posts, categories }
  }
}

function ResultsPage({ posts, categories }){
  console.log(categories, 'result page')

  const router = useRouter()
  const searchQuery = router.query.s
  let filteredPosts = posts

  if (searchQuery) {
    const searchTerms = String(searchQuery).toLowerCase().trim()
    const searchTermsArray = searchTerms
      .split(' ')
      .filter(term => term.length > 2)

    filteredPosts = posts.filter(post => {
      const title = post.title.toLowerCase()
      const description = post.postTxt.toLowerCase()

      let includesInTitle
      let includesInDescription

      searchTermsArray.forEach(searchTerm => {
        includesInTitle = title.includes(searchTerm)
        includesInDescription = description.includes(searchTerm)

        return includesInTitle || includesInDescription
      })

      if (includesInTitle || includesInDescription) return true
    })
  }

  // console.log(filteredPosts, "posts filtrados")

  return (
    <ResultPage id="result__page">
      <Head>
        {/* Primary Meta Tags */}
        <title>Resultados | ONE Funcional</title>
        <meta name="description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        <meta name="title" content="Resultados | ONE Funcional"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://onefuncional.com.br"/>
        <meta property="og:title" content="Resultados | ONE Funcional"/>
        <meta property="og:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="og:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://onefuncional.com.br"/>
        <meta property="twitter:title" content="Resultados | ONE Funcional"/>
        <meta property="twitter:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="twitter:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"></meta>
      </Head>

      <Header />
      <BannerHome />
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