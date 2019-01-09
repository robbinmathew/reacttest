import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactStrapLayout from "./ReactStrapLayout";
import ReactStrapMobileLayout from "./ReactStrapMobileLayout";
import ReactStrapTest from "./ReactStrapTest";

export default () =>
  <Switch>
    <Route path="/" exact component={ReactStrapTest} />
    <Route path="/layout" exact component={ReactStrapLayout} />
    <Route path="/mobilelayout" exact component={ReactStrapMobileLayout} />
  </Switch>;

