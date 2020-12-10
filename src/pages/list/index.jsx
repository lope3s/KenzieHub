import { useState, useEffect } from "react"

import { useSelector } from "react-redux"

import axios from "axios"

import UsersFind from '../../components/listComponent-UsersFind'
import UsersMap from '../../components/listComponent-UsersMap'

const List = () => {
  const [seek, setSeek] = useState(null)
  const [searchResult, setSearchResult] = useState(undefined)
  const [search, setSearch] = useState("")
  const listOfUsers = useSelector((state) => state.listOfUsers)

  useEffect(() => {
    if (seek) {
      loading()
    }
    if (search === "") {
      setSearchResult(undefined)
    }
  }, [seek, search])

  const loading = async () => {
    if (searchResult) {
      const res = await axios.get(
        `https://kenziehub.me/users/${searchResult.id}`
      )
      const data = await res
      console.log({ data })
      //trata o dado de acordo recebido da API e salva no estado searchResult
      return setSeek(null)
    }
    setSeek(false)
  }

  const handleSearchButton = () => {
    //busca na API com o nome salvo no estado search e altera o estado searchResult;
    setSeek(true)
    setSearchResult(listOfUsers.find((user) => search === user.name))
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
      <button onClick={() => handleSearchButton()}>Search</button>
      {seek ? (
        <div>Loading...</div>
      ) : seek === null ? (
        searchResult ? (
          <UsersFind searchResult ={searchResult} />
        ) : (
          <UsersMap listOfUsers = {listOfUsers} />
        )
      ) : (
        <div>No match found</div>
      )}
    </>
  )
}

export default List
