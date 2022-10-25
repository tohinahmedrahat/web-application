import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import Header from '../Header/Header';

const Main = () => {
  const { loginWithGoogle } = useAuth()
  const singInWithGoogle = () => {
    loginWithGoogle()
      .then(result => {
        const user = result.user
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;