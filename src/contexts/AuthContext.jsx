import React, { createContext } from "react";

import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { authenticated, loading, handleLogin, handleLogout, loggedUser } =
    useAuth();

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        handleLogin,
        handleLogout,
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
