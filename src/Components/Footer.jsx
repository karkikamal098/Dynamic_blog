import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className="footer_categories">
        <li><Link to="/posts/categories/Agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/Investment">Investment</Link></li>
        <li><Link to="/posts/categories/Climatechange">Climatechange</Link></li>
        <li><Link to="/posts/categories/Future">Future</Link></li>
        <li><Link to="/posts/categories/Technology">Technology</Link></li>
        <li><Link to="/posts/categories/Politics">Politics</Link></li>
      </ul>
      
      <div className="footer_copyright">
        <small>All Right Reserved &copy; copyright</small>
      </div>

    </footer>
  )
}

export default Footer;