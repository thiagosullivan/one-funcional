import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF,FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import logoFooter from '../../assets/logo-header.png';
import { FooterContainer, FooterContent, FooterContentBottom, FooterContentTop, SocialMediaFooter } from './styles'

function Footer() {

  function handleRedirect(url) {
    window.open(url)
  }

  return (
    <FooterContainer>
      <FooterContentTop>
        <FooterContent>
          <div className='footer_colOne'>
            <Link href="/">
              <a>
                <Image
                  src={logoFooter}
                  alt='One Funcional'
                />
              </a>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices greivodu lorem.</p>
            <SocialMediaFooter>
              <FaFacebookF
                onClick={() => handleRedirect("https://www.facebook.com/onefuncional")}
              />
              <FaTwitter
                onClick={() => handleRedirect("https://www.twitter.com")}
              />
              <FaYoutube
                onClick={() => handleRedirect("https://www.youtube.com")}
              />
              <FaInstagram
                onClick={() => handleRedirect("https://www.instagram.com")}
              />
            </SocialMediaFooter>
          </div>
          <ul className='footer_colTwo'>
            <h3>Site</h3>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/classes">Classes</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/our-team">Our Team</Link></li>
            <li><Link href="/pages">Pages</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className='footer_colThree'>
            <h3>Contact</h3>
            <div className='colThree__infos'>
              <p><strong>Address:</strong> R. Montevidéu, 672<br/>
              Guanabara, Londrina - PR<br/>
              86050-020</p>
              <p><a href="tel:+5543999829722"><strong>Phone:</strong> &#40;43&#41; 3339-7334</a><br />
              &#40;43&#41; 99982-9722</p>
              <p><a href="mailto:contato@onefuncional.com.br"><strong>E-mail:</strong> contato@onefuncional.com.br</a></p>
            </div>
          </div>
        </FooterContent>
      </FooterContentTop>
      <FooterContentBottom>
        © 2022 <strong>One Funcional</strong> - Desenvolvido por <strong>Digital Cloud Marketing</strong>.
      </FooterContentBottom>
    </FooterContainer>
  )
}

export default Footer