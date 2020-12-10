import { Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import List from "../pages/list"
import Profile from "../pages/profile"
import SignIn from "../pages/signIn"
import SingnUp from "../pages/signUp"
import { useSelector } from "react-redux"

const Routes = () => {
  const isAuth = useSelector((state) => state.auth)
  if (isAuth) {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SingnUp} />
        </Switch>
      </>
    )
  }
  if (!isAuth) {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SingnUp} />
        </Switch>
      </>
    )
  }
}

export default Routes
