import { UserContainer } from "../Users/style"
import { UsersContainer } from "../ListComponent-UsersMap/style"

import { useHistory } from "react-router-dom"

import axios from "axios"

const UsersFind = ({ searchResult }) => {
  const history = useHistory()

  const handleRedirect = async (identity) => {
    const res = await axios.get(`https://kenziehub.me/users/${identity}`)
    localStorage.setItem("userSearch", JSON.stringify(res.data))

    history.push("/userSearch")
  }

  return (
    <UsersContainer>
      {searchResult.map(
        ({ name, avatar_url, course_module, contact, id }, index) => {
          return (
            <UserContainer key={index} onClick={() => handleRedirect(id)}>
              <span>
                <img
                  alt={name}
                  src={
                    avatar_url
                      ? avatar_url
                      : "https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"
                  }
                />
              </span>
              <span>{name}</span>
              <span>{course_module !== "undefined" && course_module}</span>
              <span>{contact !== "undefined" && contact}</span>
            </UserContainer>
          )
        }
      )}
    </UsersContainer>
  )
}

export default UsersFind
