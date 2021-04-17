import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

/** In this tutorial, this is how i import elements from
 * styled-components styles declaration, but lengthyness of
 * this makes me ask a question: 
 * 1. is this the best way for such a work to be done? 
 * 2. since i am importing everything, isn't there a better 
 * way for doing this?
 */
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';


/** Here i have a great example of how i can use custom styled-components in my component file.
 * These things, Navbar, HeroH1 etc. are created in HeroElements.js file, where i have CSS, and
 * then i just put them here. I do not assign any classes to them here, but create them with their
 * respective styles, and just name them here.
 * 
 * Example put locally:
 *  export const HeroH1 = styled.h1`
 *  font-size: clamp(2.5rem, 10vw, 5rem);
 *  margin-bottom: 1rem;
 *  box-shadow: 3px 5px #e9ba23;
 *  letter-spacing: 3px;
 * `;
 *
 * <HeroH1>Greatest Pizza Ever</HeroH1>
 *
 * I have all these comments here because this is the first file. In other similar structures, 
 * i will put a reference to this file with these comments.
 *
 */
const Hero = () => {
  /** Here i create a state with value false, and it is automatically set by the first
   * argument on the left hand side - isOpen. Another variable will allow me to change that 
   * boolean.
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Here, in this function, the only thing i do is i set setIsOpen variable, which i had above 
   * as a second value to left hand side of useState declaration, to an opposite value of whatever 
   * was the value of isOpen.
   * 
   * There is a starting possition to sidebar, and here, since i have false set above, and true set 
   * here, sidebar is out of view first, which is due to value false, and gets in with that value change, 
   * which than is that false i get here.
   * 
   * If i declare true above, here i will have false, and sidebar will be first - open, and then - gone out 
   * of view.
   */
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Line below send a function toggle, which is declared above, to a component Navbar.
   * I can see it being used in Navbars index.js:
   * 
   * <Navbar toggle={toggle} />
   * 
   * ------------------------------------------------------------------------------------
   * 
   * About another line here:
   * 
   * <Sidebar isOpen={isOpen} toggle={toggle} />
   * 
   * With this line i pass two props to Sidebar component, and those are isOpen and 
   * toggle, which are named according to corresponding function and variable.
   * 
   * isOpen here contains value TRUE, and another, an opposite of it - FALSE.
   */
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
