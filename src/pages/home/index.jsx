import ButtonRedirect from "../../components/ButtonRedirect"
import ButtonTechs from "../../components/ButtonTechs"

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <ButtonRedirect text={"Users List"} link={"list"} />
      <ButtonRedirect text={"Sign In"} link={"signIn"} />
      <ButtonRedirect text={"SignUp"} link={"signUp"} />
      <ButtonTechs />
    </div>
  )
}

export default Home
