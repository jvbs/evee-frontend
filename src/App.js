import React from "react";
import { Router } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Routes from "./router/routes";
import history from "./utils/history";

import "./styles/global.css";

const App = () => {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
};

export default App;
