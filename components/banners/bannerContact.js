import React from 'react';
import Link from 'next/link';
import { BannerContactContainer, BannerContactContent } from './styles';

function BannerContact() {
  return (
    <BannerContactContainer bgUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/banner-result-min.webp">
      <BannerContactContent>
        <div className='bannerContact__txt'>
          <p>Fale <span>Conosco</span></p>
        </div>
      </BannerContactContent>
    </BannerContactContainer>
  )
}

export default BannerContact;