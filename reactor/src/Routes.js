import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import NotFound from "./container/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;