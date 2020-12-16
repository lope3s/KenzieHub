import { UserContainer } from "./style";

import axios from 'axios'

import { useHistory } from 'react-router-dom'

const User = ({user}) => {
  const history = useHistory()

  const { name, course_module, avatar_url, contact, id } = user;

  const handleRedirect = async(identity) => {

    const res = await axios.get(`https://kenziehub.me/users/${identity}`)
    localStorage.setItem('userSearch', JSON.stringify(res.data))

    history.push('/userSearch')
  }

  return (
    
    <UserContainer onClick = {() => handleRedirect(id)}>
      <span><img alt={name} src={ avatar_url ? avatar_url: "https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"}/></span>
      <span>{name}</span>
      <span>{course_module !== "undefined" && course_module}</span>
      <span>{contact !== "undefined" && contact}</span>
    </UserContainer>

  );
};
export default User;