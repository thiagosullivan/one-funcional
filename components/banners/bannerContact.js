import React from 'react';
import Link from 'next/link';
import { BannerContactContainer, BannerContactContent } from './styles';

function BannerContact() {
  return (
    <BannerContactContainer bgUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/banner-contact.webp">
      <BannerContactContent>
        <div className='bannerContact__txt'>
          <p>Contact <span>Us</span></p>
        </div>
      </BannerContactContent>
    </BannerContactContainer>
  )
}

export default BannerContact;