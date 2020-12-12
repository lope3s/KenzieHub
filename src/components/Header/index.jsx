import ButtonRedirect from "../../components/ButtonRedirect"

import { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { validation } from "../../store/modules/validationToken/action"

import "./header.css" //teste, precisa inserir isso em styled component

const Header = () => {
  const [isAuth, setAuth] = useState(false)
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const logOut = () => {
    localStorage.removeItem("token")
    dispatch(validation(false))
  }

  const divLinksAuthenticated = (
    <div className="links-content">
      <div className="link-home">
        <ButtonRedirect text={"Home"} link={""} />
      </div>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
  const divLinksNotAuthenticated = (
    <div className="links-content">
      <div className="link-home">
        <ButtonRedirect text={"Home"} link={""} />
      </div>
      <ButtonRedirect text={"Sign In"} link={"signIn"} />
      <ButtonRedirect text={"Sign Up"} link={"signUp"} />
    </div>
  )

  useEffect(() => {
    auth ? setAuth(true) : setAuth(false)
  }, [auth])

  return (
    <header className="header-content">
      {isAuth ? divLinksAuthenticated : divLinksNotAuthenticated}
    </header>
  )
}

export default Header
