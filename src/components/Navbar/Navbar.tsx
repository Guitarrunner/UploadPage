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
import { FooterA } from "../Footer/FooterElements";

const Navbar = ({ toggle }: { toggle: any }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <NavbarBigContainer>
        <a href="http://localhost:3000/">
          <Logo src={logo} onClick={toggleHome} />
        </a>
        <Nav>
          <NavbarContainer>
            <MobileLogo onClick={toggle}>
              <FaBars />
            </MobileLogo>
            <NavMenu>
              <NavItem>
                <NavLinks to="/cursos">Cursos</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/unidades">Unidades</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contato">Contato</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/sobre">Sobre nós</NavLinks>
              </NavItem>
              <NavBtn>
                <Button to="/signin">Cadastre-se</Button>
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
