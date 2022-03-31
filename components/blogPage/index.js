import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import PostBlogIndividual from './PostBlogIndividual';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import { PostsBlogContainer } from './styles';

function BlogPage({ postagens }) {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = postagens.slice(pagesVisited, pagesVisited + usersPerPage).map((posts) => {
    return (
      <PostBlogIndividual
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
    <PostsBlogContainer>
      {displayUsers}
      {displayUsers.length > 1 &&
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
      
    </PostsBlogContainer>
  )
}

export default BlogPage