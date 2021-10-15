import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
 

  return (
    <div>
      <AuthContext.Provider value={useFirebase()}>
      {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;