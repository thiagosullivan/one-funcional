import React, {useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import SearchAside from '../search/searchAside';
import { AsideContainer, CategoriesAside } from './styles';


function Aside({ categories }) {

  return (
    <AsideContainer>
      <SearchAside />
      <CategoriesAside>
        <p>Categories</p>
        <ul>
          {categories.map((cate, index) => {
            return (
              <li key={index}>
                <Link href={`/categorias?s=${cate.slug}`}>
                  {cate.categoryName}
                </Link>
              </li>
              )
          })}
        </ul>
      </CategoriesAside>
    </AsideContainer>
  )
}

export default Aside