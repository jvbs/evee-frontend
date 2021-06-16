import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import UserAccount from "./pages/UserAccount";

import AdminHome from "./pages/Admin/Home";

import "./styles/global.css";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/user/account">
        <UserAccount />
      </Route>
      <Route path="/admin" exact>
        <AdminHome />
      </Route>
    </Switch>
  </Router>
);

export default App;
