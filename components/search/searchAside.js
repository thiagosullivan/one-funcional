import React, {useState} from 'react';
import { useRouter } from "next/router";
import { FaSearch } from 'react-icons/fa';
import { SearchAsideContainer, SearchAsideContent } from './styles';

function SearchAside() {

  const [search, setSearch] = useState('')
  const [isSearchLoading, setIsSearchLoading] = useState(false)

  const router = useRouter()

  return (
    <SearchAsideContainer>
      <SearchAsideContent
        onSubmit={event => {
          event.preventDefault()
          setIsSearchLoading(true)

          router.push(`/resultados?s=${search}`)

          setTimeout(() => setIsSearchLoading(false), 400)

          setSearch('')
        }}
      >
        <div className='aside__input__container'>
          <input
            placeholder="O que deseja procurar?"
            type="text"
            value={search}
            onChange={event => setSearch(event.target.value)}
            required
          />
          <FaSearch />
        </div>
        <button type="submit">
          Pesquisar
        </button>
      </SearchAsideContent>
      {isSearchLoading && 'carregando...'}
    </SearchAsideContainer>
  )
}

export default SearchAside