import React from 'react';
import './header.css';
import { FaHome,FaHtml5,FaRegIdBadge,FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Header = () => {
      return (
<header className="header">
      <nav className="nav_container">
        <ul className="nav_list grid">
          <li className="nav_item">
            <Link to="/"><FaHome />Home</Link>
          </li>
          <li className="nav_item">
          <Link to="/about"><FaRegIdBadge />About</Link>
          </li>
          <li className="nav_item">
          <Link to="/skills"><FaHtml5 />Skills</Link>
          </li>
          <li className="nav_item">
          <Link to="/contact"><FaMailBulk />Contact</Link>
          </li>
        </ul>
      </nav>
          Hi, I'm Hajime Hakamada.
          </header>
  )
}
