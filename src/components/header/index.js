import React from 'react';
import Nav from './nav';
import './style.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo'></div>
          <Nav className={'header__nav'} />
          <a href='' className='header__help'>
            Техподдержка
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
