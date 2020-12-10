import ButtonRedirect from "../../components/ButtonRedirect"

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <ButtonRedirect text={"Users List"} link={"list"} />
      <ButtonRedirect text={"Sign In"} link={"signIn"} />
      <ButtonRedirect text={"SignUp"} link={"signUp"} />
      <ButtonRedirect text={"Profale"} link={"profile"} />
    </div>
  )
}

export default Home
