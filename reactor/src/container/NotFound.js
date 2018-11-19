import React from "react";
import "./NotFound.css";

export default () =>
  <div className="NotFound">
    <h3>Sorry, page {window.location.href} not found!</h3>
  </div>;
