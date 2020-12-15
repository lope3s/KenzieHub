import { UserContainer } from '../Users/style'
import { UsersContainer } from "../listComponent-UsersMap/style"

const UsersFind = ({ searchResult }) => {
  console.log(searchResult)
  return (
  <UsersContainer>
  {searchResult.map(({name, avatar_url, course_module, contact}, index) => {
    return (
      <UserContainer key = {index}>
      <span><img alt={name} src={ avatar_url ? avatar_url: "https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"}/></span>
      <span>{name}</span>
      <span>{course_module !== "undefined" && course_module}</span>
      <span>{contact !== "undefined" && contact}</span>
      </UserContainer>
    )
  })}
  </UsersContainer>
  )
}

export default UsersFind
