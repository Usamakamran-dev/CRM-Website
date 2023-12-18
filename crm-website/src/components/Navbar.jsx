import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../assets/Icons/logo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 w-full bg-white z-10'>
      <div className="flex justify-between items-center px-20 py-3 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)]">
        {/* Logo */}
        <div className='m-0 p-0'>
            <img src={logo} alt="Website-logo" className='w-10 h-auto'/>
        </div>

        {/* Navigation links for small screens */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={handleMenuToggle}
          >
            Menu
          </button>
        </div>

        {/* Navigation links for medium and larger screens */}
        <div className="hidden md:flex space-x-4 gap-4">
          <NavLink to="/" className='font-medium text-gray-500 transition duration-300 ease-in-out hover:text-blue-500  text-sm'>Dashboard</NavLink>
          <NavLink to="/smartview" className='font-medium text-gray-500 transition duration-300 ease-in-out hover:text-blue-500  text-sm'>Smart View</NavLink>
          <NavLink to="/leadDetail" className='font-medium text-gray-500 transition duration-300 ease-in-out hover:text-blue-500  text-sm'>Lead Detail</NavLink>
          <NavLink to="#" className='font-medium text-gray-500 transition duration-300 ease-in-out hover:text-blue-500  text-sm'>Link</NavLink>
          <NavLink to="#" className='font-medium text-gray-500 transition duration-300 ease-in-out hover:text-blue-500  text-sm'>Link</NavLink>
        </div>

      {/* Responsive menu for small screens */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="bg-gray-800">
            <li >
              <a href="#" onClick={handleMenuToggle}>Link</a>
            </li>
            <li >
              <a href="#" onClick={handleMenuToggle}>Link</a>
            </li>
            <li >
              <a href="#" onClick={handleMenuToggle}>Link</a>
            </li>
            <li >
              <a href="#" onClick={handleMenuToggle}>Link</a>
            </li>
          </ul>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
