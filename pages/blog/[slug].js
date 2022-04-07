import Head from 'next/head';
import Aside from '../../components/aside';
import BannerNews from '../../components/banners/bannerNews';
import Footer from '../../components/footer';
import Header from '../../components/header';
import HeaderMobile from '../../components/headerMobile';
import PostBlogPage from '../../components/postBlogPage';
import SearchAside from "../../components/search/searchAside";
import { getAllCategories, getAllPosts } from "../../lib/dato-cms";
import { PostPageContainer, PostPageContainerBottom } from '../../styles/postPage';

function PostPage({ post, posts, categories}){

  // console.log(post, 'post')
  // console.log(posts, 'posts')

  return (
    <div id="post__page">
      <Head>
        {/* Primary Meta Tags */}
        <title>{post.title} | ONE Funcional</title>
        <meta name="description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões." />
        <meta name="title" content={`${post.title} | ONE Funcional`}/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://onefuncional.com.br"/>
        <meta property="og:title" content={`${post.title} | ONE Funcional`}/>
        <meta property="og:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="og:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://onefuncional.com.br"/>
        <meta property="twitter:title" content={`${post.title} | ONE Funcional`}/>
        <meta property="twitter:description" content="A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões."/>
        <meta property="twitter:image" content="https://i.ibb.co/Nx6S3hP/metatab-img.jpg"></meta>
      </Head>

      <Header />
      <HeaderMobile />
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