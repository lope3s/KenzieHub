import Login from "../../components/Login"
import Container from "./style"
import loginImage from "./web-development-bw 1.png"

const SignIn = () => {
  return (
    <Container>
      <img src={loginImage} alt="login" />
      <Login />
    </Container>
  )
}
export default SignIn
