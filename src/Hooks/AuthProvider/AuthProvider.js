import React, { createContext } from 'react';
import Firebase from '../../Firebase/FirebaseInt/FirebaseInt';

export const authContex = createContext()
const AuthProvider = ({children}) => {
    const firebase = Firebase()
    return (
        <authContex.Provider value={firebase}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;