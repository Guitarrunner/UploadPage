import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
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
  Nav2,
  NavbarBigContainer,
} from "./NavbarElements";
import { Button } from "../ButtonElement/ButtonElements";
import { Buttonn, NavBtn2 } from "../Buttonclass/ButtonclassElements";

const Navbar = ({ toggle }: { toggle: any }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <NavbarBigContainer>
        <Logo src={logo} onClick={toggleHome} />
        <Nav>
          <NavbarContainer>
            <MobileLogo onClick={toggle}>
              <FaBars />
            </MobileLogo>
            <NavMenu>
              <NavItem>
                <NavLinks to="courses">Cursos</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="units">Unidades</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact">Contato</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about">Sobre nós</NavLinks>
              </NavItem>
              <NavBtn>
                <Button
                  to="/signin"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Cadastre-se
                </Button>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
        <Nav2>
          <NavBtn2>
            <Buttonn>Aula grátis</Buttonn>
          </NavBtn2>
        </Nav2>
      </NavbarBigContainer>
    </>
  );
};

export default Navbar;
