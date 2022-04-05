import React from 'react';
import Link from 'next/link';
import { BannerHomeContainer, BannerHomeContent } from './styles';

function BannerHome() {
  return (
    <BannerHomeContainer bgUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/banner-home-opt.webp">
      <BannerHomeContent>
        <div className='bannerhome__txt'>
          <p>Esculpa seu corpo</p>
          <h1>Seja <span>Forte</span><br/>Treine pesado</h1>
          <Link href="/" passHref>
            Mais informações
          </Link>
        </div>
      </BannerHomeContent>
    </BannerHomeContainer>
  )
}

export default BannerHome;