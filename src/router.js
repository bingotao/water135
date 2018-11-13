import React from "react";
import { Router, Route, Switch } from "dva/router";
import HMSSIndex from "./components/HMSSDC/Index";
import Login from "./components/Login/Login";
import ModifyPassword from "./components/ModifyPassword/ModifyPassword";
import MainTest from "./components/Test/Main";
import Authorized from "./components/Test/Authorized";



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/forms" component={HMSSIndex} />
        <Route path="/modifypassword" component={ModifyPassword} />
        <Route
          path="/test"
          render={ps => (
            <Authorized c_id="Main" noMatch={<Login />}>
              <MainTest {...ps} />
            </Authorized>
          )}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
