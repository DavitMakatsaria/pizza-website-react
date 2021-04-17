import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

// Relevant coments are given in Hero components index.js

/** 
 * Here i have a sidebar body, and i get functions, which allow me to either show, or 
 * hide sidebar.
 * 
 * 
 * With this first line i recieve two props, which were sent from Hero components
 * index.js, which i can clearly observe there.
 * 
 * --------------------------------------------------
 * 
 * This is an X icon on top right corner, which closes the 
 * Sidebar (moves it out of view)
 * 
 * <Icon onClick={toggle}>
 * <CloseIcon />
 * </Icon>
 * 
 * --------------------------------------------------
 * 
 * These are literal links which i see in sidebar, and 
 * which will be specific pages themselves.
 * 
 * <SidebarLink to='/'>Pizzas</SidebarLink>
 * <SidebarLink to='/'>Desserts</SidebarLink>
 * <SidebarLink to='/'>Full Menu</SidebarLink>
 * 
 * --------------------------------------------------
 * 
 * This is a button, which sends user to Ordering page
 * 
 * <SideBtnWrap>
 * <SidebarRoute to='/'>Order Now</SidebarRoute>
 * </SideBtnWrap>
*/
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizzas</SidebarLink>
        <SidebarLink to='/'>Desserts</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
