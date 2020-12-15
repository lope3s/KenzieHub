import {useState, useEffect} from 'react'
import User from "../Users"
import { UsersContainer, UsersContainerTitle } from "./style";
const UsersMap = ({listOfUsers,usersPerPage,page}) => {
  const [usersInPage, setUsersInPage] = useState([]);
  useEffect(() => {
    const initial = usersPerPage * (page - 1);
    const end = initial + usersPerPage;
    setUsersInPage(listOfUsers.slice(initial, end));
  }, [listOfUsers, usersPerPage, page]);

    return (
      <UsersContainer>
      <UsersContainerTitle>
        <span>Profile</span>
        <span>Name</span>
        <span>Couser Module</span>
        <span>Contact</span>
      </UsersContainerTitle>
     { usersInPage.map(
            (current, index) => (
              <User user={current} key ={index}/>
            )
          )}
      </UsersContainer>
    )
}

export default UsersMap