import ButtonRedirect from "../../components/ButtonRedirect"

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <ButtonRedirect text={"Users List"} link={"list/page=1"} />
      <ButtonRedirect text={"Sign In"} link={"signIn"} />
      <ButtonRedirect text={"SignUp"} link={"signUp"} />
      <ButtonRedirect text={"Profile"} link={"profile"} />
    </div>
  )
}

export default Home
