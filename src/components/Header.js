import React from 'react';
import { NavLink } from 'react-router-dom';
import userImg from '../img/user.svg';

function Header() {
  return (
    <header className="Header">
      <nav className="NavBar">
        <h1 className="Title">
          <NavLink to="/react-bookstore/" rel="noopener noreferrer">
            Bookstore CMS
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/react-bookstore/" rel="noopener noreferrer">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/Categories/" rel="noopener noreferrer">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
        <img className="Profile" alt="Profile" src={userImg} />
    </header>
  );
}

export default Header;