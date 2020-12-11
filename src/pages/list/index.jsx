import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import addUserThunk from "../../store/modules/listOfUsers/thunks";
import { useSelector } from "react-redux";

import axios from "axios";

import UsersFind from "../../components/listComponent-UsersFind";
import UsersMap from "../../components/listComponent-UsersMap";

const List = () => {
  const [seek, setSeek] = useState(null);
  const [searchResult, setSearchResult] = useState(undefined);
  const [search, setSearch] = useState("");
  const [nextUrl, setNextUrl] = useState("https://kenziehub.me/users");
  const listOfUsers = useSelector((state) => state.listOfUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    setSeek(true);
    loading();
  }, [dispatch, nextUrl]);

  useEffect(() => {
    if (search === "") {
      setSearchResult(undefined);
    }
  }, [search]);

  const loading = async () => {
    try {
      const res = await axios.get(nextUrl);
      await dispatch(addUserThunk(res.data));
      if (res.data.length > 0) {
        setNextUrl(res.headers.nexturl);
        console.log(res);
        return;
      }
      setSeek(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchButton = async () => {
    //busca na API com o nome salvo no estado search e altera o estado searchResult;
    setSeek(true);
    await setSearchResult(
      listOfUsers.filter((user) => user.name.includes(search))
    );
    setSeek(null);
  };

  const handleSearchInput = (ev) => {
    // pegar valor digitado no input
    setSearch(ev.target.value);
  };

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
  );
};

export default List;
