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

    return(
        <>
        {
            seek === true ? 
            <div>Loading...</div> : 
            seek == null ? (
            <button onClick={() => handleSearchButton}>Search</button>,
            searchResult ? 
            <div>
                <img alt={searchResult.name} src = {searchResult.avatar_url}/>
                <p>{searchResult.name}</p>
                <p>{searchResult.course_module}</p>
                <p>{searchResult.contact}</p>
            </div> : 
                listOfUsers.map(({name, course_module, avatar_url, contact}) => (
                    <div>
                        <img alt={name} src = {avatar_url}/>
                        <p>{name}</p>
                        <p>{course_module}</p>
                        <p>{contact}</p>
                    </div>
                    )                
                )
                 
             ) :
            <div>No match found</div>
        }
        </>
    )
}

export default List