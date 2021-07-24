import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

// non-authenticated pages
import Home from "../pages/Home";
import UserAccountLogin from "../pages/Home/UserAccountLogin";
import UserAccountCreate from "../pages/Home/UserAccountCreate";
// authenticated pages
import AdminHome from "../pages/Admin/Home";
import CreateCollaborator from "../pages/Admin/CreateCollaborator";
import EditUser from "../pages/Admin/EditUser";
import Collaborator from "../pages/Admin/Collaborator";
import CollaboratorDetails from "../pages/Admin/Collaborator/Details";
import Mentors from "../pages/Admin/Mentors/Home";
import MentorDetails from "../pages/Admin/Mentors/MentorDetails";
import Mentoreds from "../pages/Admin/Mentoreds/Home";
import MentoredDetails from "../pages/Admin/Mentoreds/MentoredDetails";
import EditCollaborator from "../pages/Admin/EditCollaborator";
import Trilha from "../pages/Admin/Mentors/Trilha";
import CreateTrilha from "../pages/Admin/Mentors/Trilha/CreateTrilha";
import EditTrilha from "../pages/Admin/Mentors/Trilha/EditTrilha";

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
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute
        path="/user/account/login"
        exact
        component={UserAccountLogin}
      />
      <ProtectedRoute
        path="/user/account/create"
        exact
        component={UserAccountCreate}
      />
      <ProtectedRoute path="/admin" exact isPrivate component={AdminHome} />
      <ProtectedRoute
        path="/admin/edit-user"
        exact
        isPrivate
        component={EditUser}
      />
      <ProtectedRoute
        path="/admin/create-collaborator"
        exact
        isPrivate
        component={CreateCollaborator}
      />
      <ProtectedRoute
        path="/admin/collaborator"
        exact
        isPrivate
        component={Collaborator}
      />
      <ProtectedRoute
        path="/admin/mentors"
        exact
        isPrivate
        component={Mentors}
      />
      <ProtectedRoute
        path="/admin/mentors/details/:id"
        exact
        isPrivate
        component={MentorDetails}
      />
      <ProtectedRoute
        path="/admin/default/details/:id"
        exact
        isPrivate
        component={CollaboratorDetails}
      />
      <ProtectedRoute
        path="/admin/default/edit/:id"
        exact
        isPrivate
        component={EditCollaborator}
      />
      <ProtectedRoute
        path="/admin/mentors/edit/:id"
        exact
        isPrivate
        component={EditCollaborator}
      />
      <ProtectedRoute
        path="/admin/mentoreds"
        exact
        isPrivate
        component={Mentoreds}
      />
      <ProtectedRoute
        path="/admin/mentoreds/details/:id"
        exact
        isPrivate
        component={MentoredDetails}
      />

      {/* PDI */}
      <ProtectedRoute
        path="/admin/mentors/trilha"
        exact
        isPrivate
        component={Trilha}
      />
      <ProtectedRoute
        path="/admin/mentors/trilha/create"
        exact
        isPrivate
        component={CreateTrilha}
      />
      <ProtectedRoute
        path="/admin/mentors/trilha/edit/:id"
        exact
        isPrivate
        component={EditTrilha}
      />
    </Switch>
  );
};

export default Routes;
