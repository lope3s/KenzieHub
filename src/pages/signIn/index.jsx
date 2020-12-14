import Login from "../../components/login"
import Container from "./style"
import loginImage from "../../images/web-development-bw 1.png"

const SignIn = () => {
  return (
    <Container>
      <img src={loginImage} alt="login" />
      <Login />
    </Container>
  )
}
export default SignIn
