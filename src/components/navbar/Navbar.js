import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-400 hover:text-purple-800 text-4xl font-bold cursive tracking-widest"
          >
            Hello, Newman
          </NavLink>
          <NavLink
            to="/post"
            activeClassName='text-gray-100 bg-gray-700'
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-purple-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName='text-gray-100 bg-gray-700'
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-purple-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName='text-gray-100 bg-gray-700'
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-purple-800"
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName='text-gray-100 bg-gray-700'
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-purple-800"
          >
            Contact
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon 
            url="https://www.linkedin.com/in/jason-newman-5a779967/" 
            className="mr-4" 
            target="blank" 
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            />
            <SocialIcon 
            url="https://github.com/jarnewma" 
            className="mr-4" 
            target="blank" 
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            />
            <SocialIcon 
            url="https://twitter.com/jarnewma" 
            className="mr-4" 
            target="blank" 
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            />
        </div>
      </div>
    </header>
  );
};
