import React, { createContext } from 'react';
import useFirebase from 'Hooks/useFirebase';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const context = useFirebase();

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
