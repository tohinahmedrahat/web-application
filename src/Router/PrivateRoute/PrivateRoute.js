import { Spinner } from 'flowbite-react';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    if(loading){
       return <Spinner aria-label="Default status example" />
    }
    if(!user.uid){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;