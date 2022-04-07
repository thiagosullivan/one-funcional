import React from 'react';
import Link from 'next/link';
import { BannerResultContainer, BannerResultContent } from './styles';

function BannerResult() {
  return (
    <BannerResultContainer bgUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/banner-result-min.webp">
      <BannerResultContent>
        <div className='bannerResult__txt'>
          <p>Resultados</p>
        </div>
      </BannerResultContent>
    </BannerResultContainer>
  )
}

export default BannerResult;