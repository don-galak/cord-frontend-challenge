import React from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import { SideNavBarProps } from "../../models/components/SideNavbar";

export default function SideNavBar({ isOpen }: SideNavBarProps): JSX.Element {
  /* Write the necessary functions to show and hide the side bar on small devices */

  return (
    <SideNavBarCont className={isOpen ? "visible" : ""}>
      {/* Implement a hamburger icon slide in effect for small devices */}
      <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
        Wesley
        <NavIcon image={Arrow}></NavIcon>
      </SideNavMainLink>
      <SideNavMainLink className="menu_nav_link" to="/discover">
        Discover
        <NavIcon image={SearchWhite}></NavIcon>
      </SideNavMainLink>
      <SideNavHeader>
        <HeaderText>Watched</HeaderText>
      </SideNavHeader>
      <NavLink className="menu_nav_link" to="/watched/movies">
        Movies
      </NavLink>
      <NavLink className="menu_nav_link" to="/watched/tv-shows">
        Tv Shows
      </NavLink>
      <SideNavHeader>
        <HeaderText>Saved</HeaderText>
      </SideNavHeader>
      <NavLink className="menu_nav_link" to="/saved/movies">
        Movies
      </NavLink>
      <NavLink className="menu_nav_link" to="/saved/tv-shows">
        Tv Shows
      </NavLink>
    </SideNavBarCont>
  );
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.div<{image: any}>`
  position: absolute;
  right: 35px;
  top: 50%;
  ${({image}) => css`
    background-image: url(${image})
  `}
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div``;

const NavLink = styled(Link)`
  display: block;
`;