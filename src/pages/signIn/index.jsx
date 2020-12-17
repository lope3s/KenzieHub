import Login from "../../components/Login"
import Container from "./style"
import loginImage from "./web-development-bw 1.png"
import addUserThunk from "../../store/modules/listOfUsers/thunks"
import { useDispatch } from "react-redux"

const SignIn = () => {
  const dispatch = useDispatch()

  dispatch(addUserThunk([]))
  return (
    <Container>
      <img src={loginImage} alt="login" />
      <Login />
    </Container>
  )
}
export default SignIn
