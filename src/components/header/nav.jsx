import React from 'react';
import { navItems } from './const';

const Nav = ({ className }) => {
  const [activeClass, setActiveClass] = React.useState(0);

  const handleClick = (index) => {
		setActiveClass(index)
	};

  return (
    <nav className={`nav ${className}`}>
      <ul className='nav__list'>
        {navItems.map((item, index) => {
          return (
            <li
              onClick={() => handleClick(index)}
              key={item}
              className={`nav__item ${activeClass === index ? 'is-active' : ''}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
