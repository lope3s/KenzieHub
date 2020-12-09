import axios from "axios"
import { useEffect} from "react"
import { useDispatch } from "react-redux"
import { addUsers } from "../../store/modules/listOfUsers/actions"
import {useHistory} from 'react-router-dom'

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
    <button onClick={() => history.push('/list')}>Lista de uruários</button>
  </div>
  )
}

export default Home
