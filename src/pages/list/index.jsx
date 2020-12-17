import { useHistory, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import addUserThunk from "../../store/modules/listOfUsers/thunks"
import { useSelector } from "react-redux"

import axios from "axios"

import UsersFind from "../../components/ListComponent-UsersFind"
import UsersMap from "../../components/ListComponent-UsersMap"

import Pagination from "@material-ui/lab/Pagination"
import { Select, MenuItem, TextField, Button } from "@material-ui/core"
import {
  UsersPageContainer,
  PaginationContainer,
  SearchContainer,
  UsersContainerTitle,
} from "./style"

import LoadingDiv from "../../components/loadingComponent"
import img from "./seo-bw.png"

const List = () => {
  const [seek, setSeek] = useState(null)
  const [searchResult, setSearchResult] = useState(undefined)
  const [search, setSearch] = useState("")
  const [nextUrl, setNextUrl] = useState("https://kenziehub.me/users")
  const listOfUsers = useSelector((state) => state.listOfUsers)
  const [usersPerPage, setUsersPerPage] = useState(20)
  const [pageCount, setPageCount] = useState(0)
  let { page } = useParams()
  page = parseInt(page.split("page=").join(""))

  const history = useHistory()

  const dispatch = useDispatch()

  useEffect(() => {
    setSeek(true)
    loading()
  }, [dispatch, nextUrl])

  useEffect(() => {
    if (search === "") {
      setSearchResult(undefined)
      setSeek(null)
    }
  }, [search])

  useEffect(() => {
    setPageCount(Math.ceil(listOfUsers.length / usersPerPage))
  }, [usersPerPage, listOfUsers])

  // useEffect(() => {
  //   setUsersPerPage(usersPerPage);
  // }, []);

  const loading = async () => {
    try {
      const res = await axios.get(nextUrl)
      if (res.data.length > 0) {
        await dispatch(addUserThunk(res.data))
        setNextUrl(res.headers.nexturl)
        console.log(res)
        return
      }
      setSeek(null)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearchButton = async () => {
    //busca na API com o nome salvo no estado search e altera o estado searchResult;
    setSeek(true)
    await setSearchResult(
      listOfUsers.filter((user) => user.name.toLowerCase().includes(search))
    )
    setSeek(null)
  }

  const handleSetUsersPerPage = (evt) => {
    setUsersPerPage(evt.target.value)
  }

  const handleSearchInput = (ev) => {
    // pegar valor digitado no input
    setSearch(ev.target.value.toLowerCase())
  }
  const handleSetPage = (evt, value) => {
    history.push(`/list/page=${value}`)
  }

  return (
    <>
      <SearchContainer>
        <TextField
          margin="normal"
          variant="outlined"
          placeholder="Search Field"
          value={search}
          onChange={handleSearchInput}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleSearchButton()}
        >
          Search
        </Button>
      </SearchContainer>
      <UsersContainerTitle>
        <span>Profile</span>
        <span>Name</span>
        <span>Couser Module</span>
        <span class="contact">Contact</span>
      </UsersContainerTitle>
      <UsersPageContainer>
        {seek ? (
          <LoadingDiv img={img} text="Loading ..." />
        ) : (
          seek === null &&
          (searchResult ? (
            <UsersFind searchResult={searchResult} />
          ) : (
            <UsersMap
              listOfUsers={listOfUsers}
              usersPerPage={usersPerPage}
              page={page}
            />
          ))
        )}
        <PaginationContainer>
          <Pagination
            count={pageCount}
            onChange={handleSetPage}
            page={page}
            size="small"
          />
          <Select onChange={handleSetUsersPerPage} value={usersPerPage}>
            <MenuItem value={10}>10/Page</MenuItem>
            <MenuItem value={20}>20/Page</MenuItem>
            <MenuItem value={50}>50/Page</MenuItem>
            <MenuItem value={100}>100/Page</MenuItem>
          </Select>
        </PaginationContainer>
      </UsersPageContainer>
    </>
  )
}

export default List
