import React , { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function SmartViewNav () {
  const [activeNavLink, setActiveNavLink] = useState(0);
  const navLinks = [
    { text: 'All Leads', count: 20 },
    { text: 'Prospects', count: 20 },
    { text: 'Arabic Leads', count: 20 },
    { text: 'No Response', count: 20 },
    { text: 'Phone Call', count: 20 },
  ]
  const handleClick = (index) => 
  {
    setActiveNavLink((prevIndex) => (index === prevIndex ? prevIndex : index));
  }
    
  return (
    <nav className='w-full bg-white shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] rounded-lg'>
        <div className="flex align-items-center justify-between w-full">
                {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  onClick={() => handleClick(index)}
                  className={` ${
                    index === activeNavLink ? 'text-blue-500 font-semibold' : 'text-gray-400 font-medium'
                   } transition duration-300 ease-in-out  md:text-[0.8rem] sm:text-xs text-[0.6rem]  flex flex-row items-center md:justify-around justify-between
                   md:px-4 px-2 w-full sm:py-4 py-2 hover:bg-gray-50`}>
                  <FaUser />
                  {link.text}
                  <label className='font-bold'>{link.count}</label>
                </NavLink>
                ))}
        </div>
    </nav>
  )}
   export default SmartViewNav;
