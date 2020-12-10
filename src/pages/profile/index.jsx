import { useState } from 'react'
import Techs from '../../components/Techs'
import Works from '../../components/Works'
import ProfilePreferences from '../../components/ProfilePreferences'

const Profile = () => {
  const [information, setInformation] = useState(false)

  return (
    <>
  <button onClick={() => {setInformation(!information)}}>Mais informações</button>
  {information && <div><Works/><Techs/><ProfilePreferences/></div>}
 </>
  )
}

export default Profile
