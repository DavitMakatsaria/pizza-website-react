import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

// Relevant coments are given in Hero components index.js

/** Here i recieve function named toggle, which i have passed to this component 
 * from Hero component, and it is written there as well. I can find these in 
 * Hero components index.js
 */
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
