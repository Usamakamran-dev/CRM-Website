import React , { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRunning, FaUser, FaFileAlt, FaTasks, FaUsers, FaChartBar } from 'react-icons/fa';
import { LeadContext } from '../context/LeadProvider';


function LeadNav () {
  const value=useContext(LeadContext);
  const [activeNavLink, setActiveNavLink] = useState(0);
  const navLinks = [
    { text: 'Activities', icon: <FaRunning className='text-sm'/> },
    { text: 'Lead Details', icon: <FaUser /> },
    { text: 'Documents', icon: <FaFileAlt /> },
    { text: 'Tasks', icon: <FaTasks /> },
    { text: 'Member List', icon: <FaUsers className='text-sm'/> },
    { text: 'Summary', icon: <FaChartBar /> },
  ];
  const handleClick = (index) => 
  {
    setActiveNavLink((prevIndex) => (index === prevIndex ? prevIndex : index));
    value.setLeadNavIndex(index);
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
                  {link.icon}
                  {link.text}
                </NavLink>
                ))}
        </div>
    </nav>
  )}
   export default LeadNav;
