import React from 'react';
import { IndexLink, Link } from 'react-router';

const Navbar = () => (
  <nav className='navbar navbar-default navbar-fixed-top'>
    <div className='container'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <IndexLink to='/' className='navbar-brand'>
          React Redux Recipe
        </IndexLink>
      </div>

      <div className='collapse navbar-collapse'>
        <ul className='nav navbar-nav'>
          <li>
            <IndexLink to='/' activeClassName='route--active'>
              Home
            </IndexLink>
          </li>
          <li>
            <Link to='/about' activeClassName='route--active'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
