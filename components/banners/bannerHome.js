import React from 'react';
import Link from 'next/link';
import { BannerHomeContainer, BannerHomeContent } from './styles';

function BannerHome() {
  return (
    <BannerHomeContainer bgUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/one-banner-hero.webp">
      <BannerHomeContent>
        <div className='bannerhome__txt'>
          <p>Mude de vida</p>
          <h1>Seja <span>One</span><br/>Saúde Integral</h1>
          <Link href="/" passHref>
            Fale Conosco
          </Link>
        </div>
      </BannerHomeContent>
    </BannerHomeContainer>
  )
}

export default BannerHome;