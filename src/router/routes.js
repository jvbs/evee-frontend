import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

// non-authenticated pages
import Home from "../pages/Home";
import UserAccountLogin from "../pages/UserAccountLogin";
import UserAccountCreate from "../pages/UserAccountCreate";
// authenticated pages
import AdminHome from "../pages/Admin/Home";
import CreateCollaborator from "../pages/Admin/CreateCollaborator";
import Collaborator from "../pages/Admin/Collaborator";

const ProtectedRoute = ({ isPrivate, ...rest }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/user/account/login" />;
  }

  return <Route {...rest} />;
};

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact>
        <Home />
      </ProtectedRoute>
      <ProtectedRoute path="/user/account/login" exact>
        <UserAccountLogin />
      </ProtectedRoute>
      <ProtectedRoute path="/user/account/create" exact>
        <UserAccountCreate />
      </ProtectedRoute>
      <ProtectedRoute path="/admin" exact isPrivate>
        <AdminHome />
      </ProtectedRoute>
      <ProtectedRoute path="/admin/create-collaborator" exact isPrivate>
        <CreateCollaborator />
      </ProtectedRoute>
      <ProtectedRoute path="/admin/collaborator" exact isPrivate>
        <Collaborator />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
