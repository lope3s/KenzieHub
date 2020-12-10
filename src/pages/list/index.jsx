import { useState, useEffect } from "react"

import { useSelector } from "react-redux"

import axios from "axios"

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
    setSearch("")
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
          <div>
            <img
              alt={searchResult.name}
              src={
                searchResult.avatar_url
                  ? searchResult.avatar_url
                  : "https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"
              }
            />
            <p>{searchResult.name}</p>
            <p>
              {searchResult.course_module !== "undefined" &&
                searchResult.course_module}
            </p>
            <p>
              {searchResult.contact !== "undefined" && searchResult.contact}
            </p>
          </div>
        ) : (
          listOfUsers.map(
            ({ name, course_module, avatar_url, contact }, index) => (
              <div key={index}>
                <img
                  alt={name}
                  src={
                    avatar_url
                      ? avatar_url
                      : "https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"
                  }
                />
                <p>{name}</p>
                <p>{course_module !== "undefined" && course_module}</p>
                <p>{contact !== "undefined" && contact}</p>
              </div>
            )
          )
        )
      ) : (
        <div>No match found</div>
      )}
    </>
  )
}

export default List
