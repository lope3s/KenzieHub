import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import List from "../pages/list";
import Profile from "../pages/profile";
import SignIn from "../pages/signIn";
import SingnUp from "../pages/signUp";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Routes = () => {
  const isAuth = useSelector((state) => state.auth);
  const history = useHistory();
  console.log(isAuth);
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
