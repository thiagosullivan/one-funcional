import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import PostIndividualCard from './postIndividualCard';
import { PostsContainer } from './styles';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

function PostCardResults({ postagens }) {

  console.log(postagens, "card resultados")

  // const reversedPosts = postagens.map(postagem => postagem).reverse();
  
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = postagens.slice(pagesVisited, pagesVisited + usersPerPage).map((posts) => {
    return (
      <PostIndividualCard
        id={posts.id}
        authorName={posts.author.authorName}
        authorPhoto={posts.author.authorPhoto}
        date={posts.createdAt}
        categories={posts.categories}
        title={posts.title}
        imgLink={posts.postImg}
        postLink={posts.slug}
        text={posts.postTxt}
        resume={posts.resume}
        key={posts.id}
      />
    )
  })

  const pageCount = Math.ceil(postagens.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <PostsContainer>
      {displayUsers}
      {displayUsers.length >= 4 &&
        <ReactPaginate
          previousLabel={<MdOutlineArrowBackIos />}
          nextLabel={<MdOutlineArrowForwardIos />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      }
      
    </PostsContainer>
  )
}

export default PostCardResults