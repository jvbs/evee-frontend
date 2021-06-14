import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AdminHome from "./pages/Admin/Home";
import Colaboradores from "./pages/Admin/Colaboradores";

import "./styles/global.css";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/admin" exact>
        <AdminHome />
      </Route>
      <Route path="/admin/colaboradores" exact>
        <Colaboradores />
      </Route>
    </Switch>
  </Router>
);

export default App;
