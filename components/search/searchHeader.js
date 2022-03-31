import React, {useState} from 'react';
import { useRouter } from "next/router";
import { SearchHeaderContainer, SearchHeaderContent } from './styles';
import { IoClose } from 'react-icons/io5'
import { FaSearch } from 'react-icons/fa';

function SearchHeader({setSearchOpen}) {
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
        <div className="closebtn__search__header" onClick={() => setSearchOpen(null)}>
          <IoClose />
        </div>
        <input
          placeholder="Pesquisar"
          type="text"
          value={search}
          onChange={event => setSearch(event.target.value)}
          required
        />
        <button type="submit">
          <FaSearch />
        </button>
      </SearchHeaderContent>
      {isSearchLoading && 'carregando...'}
    </SearchHeaderContainer>
  )
}

export default SearchHeader