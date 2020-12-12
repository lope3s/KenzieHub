import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import List from "../pages/list";
import Profile from "../pages/profile";
import SignIn from "../pages/signIn";
import SingnUp from "../pages/signUp";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Routes = () => {
<<<<<<< HEAD
  const isAuth = useSelector((state) => state.auth)
  const history = useHistory()
  console.log(isAuth)
=======
  const isAuth = useSelector((state) => state.auth);
  const history = useHistory();
>>>>>>> d35bf4f2cc89e3e5aefd663ef45171e12cd9c32b
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list/:page" component={List} />
        <Route exact path="/profile">
          <Profile />
          {isAuth === false && history.push("/signIn")}
        </Route>
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SingnUp} />
      </Switch>
    </>
  );
};

export default Routes;
