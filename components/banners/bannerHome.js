import React from 'react'
import { BannerHomeContainer, BannerHomeContent } from './styles'

function BannerHome() {
  return (
    <BannerHomeContainer bgUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/banner-home-opt.webp">
      <BannerHomeContent>
        <div className='bannerhome__txt'>
          <p>Shape your body</p>
          <h1>Be <span>Strong</span><br/>training hard</h1>
        </div>
      </BannerHomeContent>
    </BannerHomeContainer>
  )
}

export default BannerHome;