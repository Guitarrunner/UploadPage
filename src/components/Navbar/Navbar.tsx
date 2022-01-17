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

const Navbar = ({ toggle, on }: { toggle: any; on: any }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <NavbarBigContainer>
        <a href="http://localhost:3000/">
          <Logo src={logo} />
        </a>
        <Nav>
          <NavbarContainer>
            <MobileLogo onClick={toggle}>
              <FaBars />
            </MobileLogo>
            <NavMenu>
              <NavItem>
                <NavLinks to="/cursos" o={on}>
                  Cursos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/unidades" o={on}>
                  Unidades
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contato" o={on}>
                  Contato
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/sobre" o={on}>
                  Sobre nós
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/parcerias" o={on}>
                  Parcerias
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/franqueado" o={on}>
                  Seja Franqueado
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/blog" o={on}>
                  Blog
                </NavLinks>
              </NavItem>
              <NavBtn>
                <Button to="/form">Seja um parceiro</Button>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
        <Nav2>
          <NavBtn2>
            <FooterA href="http://localhost:3000/aula">
              <Buttonn>Aula grátis</Buttonn>
            </FooterA>
          </NavBtn2>
        </Nav2>
      </NavbarBigContainer>
    </>
  );
};

export default Navbar;
