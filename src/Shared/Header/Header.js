import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'Hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router';

import './Header.css';

function Header() {
  const { logOut, user, isLoading } = useAuth();

  const history = useHistory();

  return (
    <div className='custom-nav bg-nav fixed-top'>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container-fluid px-3 d-flex align-items-center'>
          <a className='navbar-brand' href='/'>
            <span className='logo-text text-uppercase'>
              <span data-col='gold'>surreal </span>
              <span data-col='blue'>studio</span>
            </span>
          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item mb-2 mb-lg-0'>
                <NavLink to='/home' className='common' activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item mb-2 mb-lg-0'>
                <NavLink
                  to='/explore'
                  className='common'
                  activeClassName='active'
                >
                  Explore
                </NavLink>
              </li>
              {user.email ? (
                <>
                  <li className='nav-item mb-2 mb-lg-0'>
                    <NavLink
                      to='/dashboard'
                      className='common'
                      activeClassName='active'
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className='nav-item mb-2 mb-lg-0'>
                    {!isLoading && (
                      <span className='fs-6 mx-2'>{user.displayName}</span>
                    )}
                  </li>
                  <li className='nav-item mb-2 mb-lg-0'>
                    <span
                      className='common'
                      onClick={() => {
                        logOut(history);
                      }}
                    >
                      <LogoutIcon />
                    </span>
                  </li>
                </>
              ) : (
                <li className='nav-item mb-2'>
                  <NavLink
                    to='/login'
                    className='common'
                    activeClassName='active'
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
