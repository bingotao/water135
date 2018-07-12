import React from "react";
import { Router, Route, Switch } from "dva/router";
import HMSSIndex from "./components/HMSSDC/Index";
import Login from "./components/Login/Login";
import ModifyPassword from "./components/ModifyPassword/ModifyPassword";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/forms" component={HMSSIndex} />
        <Route path="/modifypassword" component={ModifyPassword} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
