import { useRouter } from 'next/router';
import Link from 'next/link';
import PostCardResults from '../components/postCardResults';
import { getAllPosts } from "../lib/dato-cms";
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
    <>
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
    </>
  )
}

export default ResultsPage;