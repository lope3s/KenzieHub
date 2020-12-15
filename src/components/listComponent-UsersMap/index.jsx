import {useState, useEffect} from 'react'
import User from "../Users"
import { UsersContainer} from "./style";
const UsersMap = ({listOfUsers,usersPerPage,page}) => {
  const [usersInPage, setUsersInPage] = useState([]);
  useEffect(() => {
    const initial = usersPerPage * (page - 1);
    const end = initial + usersPerPage;
    setUsersInPage(listOfUsers.slice(initial, end));
  }, [listOfUsers, usersPerPage, page]);

    return (
      <UsersContainer>
     { usersInPage.map(
            (current, index) => (
              <User user={current} key ={index}/>
            )
          )}
      </UsersContainer>
    )
}

export default UsersMap