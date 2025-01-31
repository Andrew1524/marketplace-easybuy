import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="header__logo">
      <NavLink to='/'>
        <img src="/logo.svg" alt="logotypes" />
      </NavLink>
    </div>
  );
};

export default Logo;
