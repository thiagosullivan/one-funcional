import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { getAllPosts } from "../lib/dato-cms";

import Header from '../components/header';
import Footer from '../components/footer';

import PostCardResults from '../components/postCardResults';
import { ResultContainerPage } from '../styles/resultPage';
import SearchAside from '../components/search/searchAside';

export async function getStaticProps() {
  const posts = (await getAllPosts()) || [];

  return {
    props: { posts }
  }
}

function ResultsPage({ posts }){
  // console.log(posts, 'result page')

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
    <div id="result__page">
      <Head>
        <title>Blog | One Funcional</title>
        <meta name="description" content="A Funcional One vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        
      </Head>

      <Header />
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
        <SearchAside />
      </main>

      <Footer />
    </div>
  )
}

export default ResultsPage;