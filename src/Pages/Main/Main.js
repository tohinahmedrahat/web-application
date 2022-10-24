import React from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';
import Header from '../Header/Header';
import Home from '../Home/Home';

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
      <Home></Home>
    </div>
  );
};

export default Main;