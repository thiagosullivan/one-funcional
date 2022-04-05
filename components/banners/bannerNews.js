import React from 'react';
import Link from 'next/link';
import { BannerNewsContainer, BannerNewsContent } from './styles';

function BannerNews() {
  return (
    <BannerNewsContainer bgUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/banner-contact.webp">
      <BannerNewsContent>
        <div className='bannerNews__txt'>
          <p>Notícias e <span>Artigos</span></p>
        </div>
      </BannerNewsContent>
    </BannerNewsContainer>
  )
}

export default BannerNews;