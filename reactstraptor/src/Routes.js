import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactStrapLayout from "./ReactStrapLayout";

export default () =>
  <Switch>
    <Route path="/layout" exact component={ReactStrapLayout} />
  </Switch>;

