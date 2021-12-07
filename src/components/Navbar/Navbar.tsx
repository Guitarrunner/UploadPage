import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./Upload.png";
import {
  Nav,
  NavbarContainer,
  Logo,
  MobileLogo,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Nav2,
} from "./NavbarElements";

const Navbar = ({ toggle }: { toggle: any }) => {
  return (
    <>
      <Logo src={logo} />
      <Nav>
        <NavbarContainer>
          <MobileLogo onClick={toggle}>
            <FaBars />
          </MobileLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="courses">Courses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="units">Units</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>{" "}
      <Nav2 />
    </>
  );
};

export default Navbar;
