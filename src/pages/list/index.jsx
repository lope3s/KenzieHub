import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUsers } from "../../store/modules/listOfUsers/actions"
import { useSelector } from "react-redux"

import axios from "axios"

import UsersFind from "../../components/listComponent-UsersFind"
import UsersMap from "../../components/listComponent-UsersMap"

const List = () => {
  const [seek, setSeek] = useState(null)
  const [searchResult, setSearchResult] = useState(undefined)
  const [search, setSearch] = useState("")
  const listOfUsers = useSelector((state) => state.listOfUsers)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("https://kenziehub.me/users")
      .then((res) => {
        dispatch(addUsers(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [dispatch])

  useEffect(() => {
    if (seek) {
      loading()
    }
    if (search === "") {
      setSearchResult(undefined)
      setSeek(null)
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

  console.log({
    search,
    searchResult,
    seek,
  })

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
          <UsersFind searchResult={searchResult} />
        ) : (
          <UsersMap listOfUsers={listOfUsers} />
        )
      ) : (
        <div>No match found</div>
      )}
    </>
  )
}

export default List
