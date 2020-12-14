import ButtonRedirect from "../../components/ButtonRedirect"
import { Container, ContainerImage, ContainerRodape } from "./style"
import logo from "./logo.svg"
const Home = () => {
  return (
    <div>
      <Container>
        <div>
          <div>Home</div>
          <div>
            <ButtonRedirect text={"Users List"} link={"list"}></ButtonRedirect>
            <ButtonRedirect text={"Sign In"} link={"signIn"} />
            <ButtonRedirect text={"SignUp"} link={"signUp"} />
          </div>
        </div>
      </Container>
      <ContainerImage>
        <img src={logo} alt="Logo Home"></img>
        <div>WELCOME!</div>
      </ContainerImage>
      <ContainerRodape>KENZIEHUB ©</ContainerRodape>
    </div>
  )
}

export default Home
