import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { validation } from "../../store/modules/validationToken/action"

import { HeaderContent, LinksContent } from "./style"
import ButtonRedirect from "../../components/ButtonRedirect"
import { Link } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  console.log(location)
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
      {location.pathname === "/profile" && (
        <ButtonRedirect text={"List"} link={"list/page=1"} />
      )}
      {location.pathname === "/" && (
        <ButtonRedirect text={"Profile"} link={"profile"} />
      )}
      {location.pathname.slice(0, 5) === "/list" && (
        <ButtonRedirect text={"Back"} link={"profile"} />
      )}
      <button onClick={logOut}>Log Out</button>
    </LinksContent>
  )
  const divLinksNotAuthenticated = (
    <LinksContent>
      <div className="link-home">
        <ButtonRedirect text={"Home"} link={""} />
        {location.pathname === "/profile" && (
          <ButtonRedirect text={"List"} link={"list/page=1"} />
        )}
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
