import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Header = () => {
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
  <Navbar.Collapse className='mr-auto'>
    <Navbar.Link active={true}>
      <Link to="/">Home</Link>
    </Navbar.Link>
    <Navbar.Link>
      <Link to="/course">Course</Link>
    </Navbar.Link>
    <Navbar.Link>
      <Link to="/blog">Blog</Link>
    </Navbar.Link>
    <Navbar.Link className='ml-auto'>
      <Link to="/login">Login</Link>
    </Navbar.Link>
    <Navbar.Link>
      <Link to="/regester">Regester</Link>
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>                                                                             
    );
};

export default Header;