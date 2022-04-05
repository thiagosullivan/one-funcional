import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchHeader from '../search/searchHeader';
import { HeaderContainer, HeaderContent, NavigationHeader, SearchSocial } from './styles';
import logoHeader from '../../assets/logo-header.png';
import { FaSearch, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

function Header() {
  const [ searchOpen, setSearchOpen] = useState(null)

  function handleRedirect(url) {
    window.open(url)
  }
  
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <div className="logo__header">
            <Link href="/" passHref>
              <a>
                <Image
                  src={logoHeader}
                  width={135}
                  height={75}
                  alt="Logo One Funcional"
                />
              </a>
            </Link>
          </div>
          <NavigationHeader>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#aboutUs">Sobre Nós</Link></li>
              <li><Link href="/#services">Serviços</Link></li>
              <li><Link href="/#classes">Aulas</Link></li>
              <li><Link href="/#ourTeam">Nosso Time</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contato</Link></li>
            </ul>
          </NavigationHeader>
          <SearchSocial>
            <div className='search__header' onClick={() => setSearchOpen(true)}>
              <FaSearch />
            </div>
            <div className='socialmedia__header'>
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
            </div>
          </SearchSocial>
        </HeaderContent>
      </HeaderContainer>
      {searchOpen && <SearchHeader setSearchOpen={setSearchOpen} /> }
    </>
  )
}

export default Header