import React from 'react';
import { Navbar, Tooltip } from 'flowbite-react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import { FaEllo } from 'react-icons/fa';



const Header = () => {
  const { user } = useAuth()
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
          <Navbar.Link active={true}>
            <Link className='mr-2' to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link className='mr-2' to="/course">Course</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/blog">Blog</Link>
          </Navbar.Link>
        </div>
        <div className='md:flex mx-auto'>
          {
            user.uid ? <>
              <Tooltip content={user.displayName?user.displayName : "please input your full name"}>
                <img className='w-8 h-8 rounded-full' src={user.photoURL?user.photoURL : <FaEllo></FaEllo>} alt="" />
              </Tooltip>

            </> : <>
              <Navbar.Link >
                <Link className='mr-2' to="/login">Login</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to="/regester">Regester</Link>
              </Navbar.Link>
            </>
          }
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;