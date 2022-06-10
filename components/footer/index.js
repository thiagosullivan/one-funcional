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
            <p>A ONE Funcional vem trazer uma novo conceito em treinamento físico para pessoas que querem manter sua boa forma e buscar prevenir-se de novas lesões.</p>
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
                onClick={() => handleRedirect("https://www.instagram.com/onefuncional")}
              />
            </SocialMediaFooter>
          </div>
          <ul className='footer_colTwo'>
            <h3>Site</h3>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Sobre Nós</Link></li>
            <li><Link href="/services">Serviços</Link></li>
            <li><Link href="/classes">Aulas</Link></li>
            <li><Link href="/our-team">Nosso Time</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contato</Link></li>
          </ul>
          <div className='footer_colThree'>
            <h3>Contato</h3>
            <div className='colThree__infos'>
              <p><strong>Endereço:</strong> R. Montevidéu, 672<br/>
              Guanabara, Londrina - PR<br/>
              86050-020</p>
              <p><a href="tel:+5543999829722"><strong>Telefone:</strong> &#40;43&#41; 3339-7334</a><br />
              <a
                href="https://api.whatsapp.com/send?phone=5543999829722"
                rel="noreferrer noopener"
                target="_blank"
              >&#40;43&#41; 99982-9722</a></p>
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