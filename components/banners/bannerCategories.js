import React from 'react';
import Link from 'next/link';
import { BannerCategoriesContainer, BannerCategoriesContent } from './styles';

function BannerCategories() {
  return (
    <BannerCategoriesContainer bgUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/banner-result-min.webp">
      <BannerCategoriesContent>
        <div className='bannerCategories__txt'>
          <p>Categorias</p>
        </div>
      </BannerCategoriesContent>
    </BannerCategoriesContainer>
  )
}

export default BannerCategories;