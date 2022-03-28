import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF,FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import logoFooter from '../../assets/logo-header.png';
import { FooterContainer, FooterContent, FooterContentBottom, FooterContentTop, SocialMediaFooter } from './styles'

function Footer() {
  return (
    <FooterContainer>
      <FooterContentTop>
        <FooterContent>
          <div className='footer_colOne'>
            <Link href="/">
              <a>
                <Image
                  src={logoFooter}
                />
              </a>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices greivodu lorem.</p>
            <SocialMediaFooter>
              <FaFacebookF
                onClick={() => handleRedirect("https://www.facebook.com")}
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
              <p><strong>Address:</strong> Avenida Higienópolis,<br/>
              Centro, Londrina - PR<br/>
              86010-380</p>
              <p><a href="tel:+43999999999"><strong>Phone:</strong> (43) 99999-9999</a><br /></p>
              <p><a href="mailto:contato@onefuncional.com.br"><strong>E-mail:</strong> contato@onefuncional.com.br</a></p>
            </div>
          </div>
        </FooterContent>
      </FooterContentTop>
      <FooterContentBottom>
        © 2022 <strong>One Funcional</strong> - Desenvolvido por <strong>Digital Cloud Brasil</strong>.
      </FooterContentBottom>
    </FooterContainer>
  )
}

export default Footer