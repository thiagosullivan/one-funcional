import React, {useState} from 'react';
import { useRouter } from "next/router";
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
        <input
          placeholder="Pesquisar"
          type="text"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <button type="submit">
          Pesquisar
        </button>
      </SearchAsideContent>
      {isSearchLoading && 'carregando...'}
    </SearchAsideContainer>
  )
}

export default SearchAside