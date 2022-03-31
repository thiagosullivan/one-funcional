import Head from 'next/head';
import Aside from '../../components/aside';
import BannerNews from '../../components/banners/bannerNews';
import Footer from '../../components/footer';
import Header from '../../components/header';
import PostBlogPage from '../../components/postBlogPage';
import SearchAside from "../../components/search/searchAside";
import { getAllCategories, getAllPosts } from "../../lib/dato-cms";
import { PostPageContainer, PostPageContainerBottom } from '../../styles/postPage';

function PostPage({ post, posts, categories}){

  console.log(post, 'post')
  console.log(posts, 'posts')

  return (
    <div id="post__page">
      <Head>
        <title>{post.title} | One Funcional</title>
        <meta name="description" content="A Funcional One vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
      </Head>

      <Header />
      <PostPageContainer>
        <BannerNews />
        <PostPageContainerBottom>
          <PostBlogPage post={post} />
          <Aside categories={categories}/>
        </PostPageContainerBottom>
      </PostPageContainer>
      <Footer />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const posts = await getAllPosts();
  const post = posts.find((s) => s.slug === slug) || null;
  const categories = (await getAllCategories() || []);

  if(!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      categories,
      post,
      allPosts: posts,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const slugs = posts.map((s) => ({ params: { slug: s.slug }}));

  return {
    paths: slugs,
    fallback: false,
  }
}

export default PostPage;