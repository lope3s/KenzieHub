import axios from "axios"
import { useEffect} from "react"
import { useDispatch } from "react-redux"
import { addUsers } from "../../store/modules/listOfUsers/actions"
import {useHistory} from 'react-router-dom'

import ButtonRedirect from '../../components/ButtonRedirect'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    axios
      .get("https://kenziehub.me/users")
      .then((res) => {
        dispatch(addUsers(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [dispatch])

  return (
  <div>
    <div>Home</div>
    <ButtonRedirect text = {'Users List'} link = {'list'}/>
  </div>
  )
}

export default Home
