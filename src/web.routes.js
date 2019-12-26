import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/Home";
import Test from "./containers/Test";

const Router = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Switch>
  </BrowserRouter>
);

export default Router;
