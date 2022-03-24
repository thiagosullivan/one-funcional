import React, {useState} from 'react';
import { useRouter } from "next/router";
import { SearchHeaderContainer, SearchHeaderContent } from './styles';

function SearchHeader() {
  const [search, setSearch] = useState('')
  const [isSearchLoading, setIsSearchLoading] = useState(false)

  const router = useRouter()

  return (
    <SearchHeaderContainer>
      <SearchHeaderContent
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
      </SearchHeaderContent>
      {isSearchLoading && 'carregando...'}
    </SearchHeaderContainer>
  )
}

export default SearchHeader