import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser.email && { label: 'Sign Up', url: '/signup' },
    !currentUser.email && { label: 'Sign In', url: '/signin' },
    currentUser.email && { label: 'Sell Tickets', url: '/addticket' },
    currentUser.email && { label: 'My Orders', url: '/orders' },
    currentUser.email && { label: 'Sign Out', url: '/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    // eslint-disable-next-line
    .map(({ label, url }) => {
      return (
        // eslint-disable-next-line
        <li key={url} className="nav-item">
          <Link to={url}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <a className="navbar-brand">Airplane Ticketing Marketplace</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
        {currentUser.email && (
          <ul className="nav d-flex align-items-center">
            Hello {currentUser.email}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
