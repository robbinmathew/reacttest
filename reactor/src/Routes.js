import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import CountryTable from "./container/CountryTable";
import CountryDetails from "./container/CountryDetails";
import NotFound from "./container/NotFound";

export default () =>
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/" exact component={CountryTable} />
    <Route path="/countries" exact component={CountryTable} />
    <Route path="/countrydetails/:name/:capital/:ns" exact component={CountryDetails} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
