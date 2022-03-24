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
    <HeaderContainer>
      <HeaderContent>
        <div className="logo__header">
          <Link href="/">
            <Image
              src={logoHeader}
              width={135}
              height={75}
              atl="Logo One Funcional"
            />
          </Link>
        </div>
        <NavigationHeader>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/classes">Classes</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/our-team">Our Team</Link></li>
            <li><Link href="/pages">Pages</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </NavigationHeader>
        <SearchSocial>
          <div className='search__header' onClick={() => setSearchOpen(true)}>
            <FaSearch />
          </div>
          <div className='socialmedia__header'>
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
          </div>
        </SearchSocial>
      </HeaderContent>
      {searchOpen && <SearchHeader setSearchOpen={setSearchOpen} /> }
    </HeaderContainer>
  )
}

export default Header