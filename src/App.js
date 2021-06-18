import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import UserAccountLogin from "./pages/UserAccountLogin";
import UserAccountCreate from "./pages/UserAccountCreate";


import AdminHome from "./pages/Admin/Home";
import CreateCollaborator from "./pages/Admin/CreateCollaborator";

import "./styles/global.css";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/user/account/login">
        <UserAccountLogin />
      </Route>
      <Route path="/user/account/create">
        <UserAccountCreate />
      </Route>
      <Route path="/admin" exact>
        <AdminHome />
      </Route>
      <Route path="/admin/create-collaborator" exact>
        <CreateCollaborator />
      </Route>
    </Switch>
  </Router>
);

export default App;
