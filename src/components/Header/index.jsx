import { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { validation } from "../../store/modules/validationToken/action"

import { HeaderContent, LinksContent } from "./style"
import ButtonRedirect from "../../components/ButtonRedirect"

const Header = () => {
  const [isAuth, setAuth] = useState(false)
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const logOut = () => {
    localStorage.removeItem("token")
    dispatch(validation(false))
  }

  const divLinksAuthenticated = (
    <LinksContent>
      <div className="link-home">
        <ButtonRedirect text={"Home"} link={""} />
      </div>
      <button onClick={logOut}>Log Out</button>
    </LinksContent>
  )
  const divLinksNotAuthenticated = (
    <LinksContent>
      <div className="link-home">
        <ButtonRedirect text={"Home"} link={""} />
      </div>
      <ButtonRedirect text={"Sign In"} link={"signIn"} />
      <ButtonRedirect text={"Sign Up"} link={"signUp"} />
    </LinksContent>
  )

  useEffect(() => {
    auth ? setAuth(true) : setAuth(false)
  }, [auth])

  return (
    <HeaderContent>
      {isAuth ? divLinksAuthenticated : divLinksNotAuthenticated}
    </HeaderContent>
  )
}

export default Header
