import React from 'react';
import { Navbar, Tooltip } from 'flowbite-react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import { FaEllo } from 'react-icons/fa';



const Header = () => {
  const { user,logOut } = useAuth()
  return (
    <Navbar
      // fluid={true}
      rounded={true}
    >
      <Navbar.Brand className='mr-4'>
        <span className="self-center whitespace-nowrap text-xl font-bold text-slate-400 dark:text-white">
          Web-Application-Learning
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className='md:flex'>
            <Link className='mr-2' to="/">Home</Link>
            <Link className='mr-2' to="/course">Course</Link>
            <Link to="/blog">Blog</Link>
        </div>
        <div className='md:flex mx-auto'>
          {
            user.uid ? <>
              <Tooltip content={user.displayName ? user.displayName : "please input your full name"}>
                <img className='w-8 h-8 rounded-full' src={user.photoURL ? user.photoURL : <FaEllo></FaEllo>} alt="" />
              </Tooltip>
              <button onClick={logOut} className='ml-2'>Log out</button>
            </> : <>
                <Link className='mr-2' to="/login">Login</Link>
                <Link to="/regester">Regester</Link>
            </>
          }
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;