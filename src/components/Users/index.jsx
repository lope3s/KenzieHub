import { UserContainer } from "./style";

const User = ({user}) => {
  const { name, course_module, avatar_url, contact } = user;


  return (
    
    <UserContainer>
      <span><img alt={name} src={ avatar_url ? avatar_url: "https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"}/></span>
      <span>{name}</span>
      <span>{course_module !== "undefined" && course_module}</span>
      <span>{contact !== "undefined" && contact}</span>
    </UserContainer>

  );
};
export default User;