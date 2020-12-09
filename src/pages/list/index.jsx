import { useState } from "react"

import { useSelector } from "react-redux"

import axios from "axios"

const List = () => {
  const [seek, setSeek] = useState(null)
  const [searchResult, setSearchResult] = useState(undefined)
  const [search, setSearch] = useState("")
  const listOfUsers = useSelector((state) => state.listOfUsers)

  const handleSearchButton = () => {
    //busca na API com o nome salvo no estado search e altera o estado searchResult;
    setSeek(true)
    setSearchResult(listOfUsers.find((user) => search === user.name))
    if (searchResult) {
      axios.get(`https://kenziehub.me/users/${searchResult.id}`)
      //trata o dado de acordo recebido da API e salva no estado searchResult
      return setSeek(null)
    }
    setSeek(false)
    setSearch("")
  }

  const handleSearchInput = (ev) => {
    // pegar valor digitado no input
    setSearch(ev.target.value)
  }

  return (
    <>
      <input
        value={search}
        onChange={handleSearchInput}
        placeholder="pesquisar usuário"
      />
      <button onClick={handleSearchButton}>Search</button>
    </>
  )
}

export default List
