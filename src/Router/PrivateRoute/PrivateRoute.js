import { Spinner } from 'flowbite-react';
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    if(loading){
        <Spinner aria-label="Default status example" />
    }
    if(!user.uid){
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;