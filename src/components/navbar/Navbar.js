import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export const Navbar = () => {
  return (
    <header className="bg-blue-dark">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-light hover:text-pink text-4xl font-bold cursive tracking-widest"
          >
            Hello, Newman
          </NavLink>
          <NavLink
            to="/post"
            activeClassName='text-gray-lightest bg-gra365496'
            className="inline-flex items-center py-3 px-3 my-6 font-bold rounded text-gray-lightest hover:text-pink"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName='text-gray-lightest bg-gra365496'
            className="inline-flex items-center py-3 px-3 my-6 font-bold rounded text-gray-lightest hover:text-pink"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName='text-gray-lightest bg-gra365496'
            className="inline-flex items-center py-3 px-3 my-6 font-bold rounded text-gray-lightest hover:text-pink"
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName='text-gray-lightest bg-gra365496'
            className="inline-flex items-center py-3 px-3 my-6 font-bold rounded text-gray-lightest hover:text-pink"
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
            bgColor="#95ABDA"
            style={{ height: 35, width: 35 }}
            />
            <SocialIcon 
            url="https://github.com/jarnewma" 
            className="mr-4" 
            target="blank" 
            fgColor="#fff"
            bgColor="#95ABDA"
            style={{ height: 35, width: 35 }}
            />
            <SocialIcon 
            url="https://twitter.com/jarnewma" 
            className="mr-4" 
            target="blank" 
            fgColor="#fff"
            bgColor="#95ABDA"
            style={{ height: 35, width: 35 }}
            />
        </div>
      </div>
    </header>
  );
};
