import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import List from "../pages/list";
import Profile from "../pages/profile";
import SignIn from "../pages/signIn";
import SingnUp from "../pages/signUp";

const Routes = (isAuth) => {
  if (isAuth) {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list/:page" component={List} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SingnUp} />
        </Switch>
      </>
    );
  }
  if (!isAuth) {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list/:page"component={List} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SingnUp} />
        </Switch>
      </>
    );
  }
};

export default Routes;
