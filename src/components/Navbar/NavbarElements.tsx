import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

interface Props {
  o?: {
    on?: boolean;
  };
}

export const NavbarBigContainer = styled.nav`
  height: 160px;
  width: 100%;
  top: 0;
  position: fixed;
  overflow-x: hidden;
  z-index: 5;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const Nav = styled.nav`
  background-color: #04c4d9;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  z-index: 5;
  position: sticky;
  top: 0;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const Nav2 = styled.nav`
  background-color: #101522;
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: right;
  font-size: 1rem;

  position: sticky;
  z-index: 5;
  top: 80px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  z-index: 5;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Logo = styled.img`
  position: fixed;
  left: 8vw;
  top: 0.1vh;
  width: 10vw;
  height: 10vw;
  background: none;
  overflow: hidden;
  padding: 10px 10px;
  overflow: visible;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    width: 17vh;
    height: 17vh;
  }
`;

export const MobileLogo = styled.div`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 40px;
`;

export const NavLinks = styled(LinkR)<Props>`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  background: ${(Props) => (Props.o?.on ? "#f57c00" : "none")};
  border-radius: 50px;
  cursor: pointer;
  &:active {
    border-bottom: 3px solid #101522;
  }

  &:hover {
    background: #f57c00;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #f57c00;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f57c00;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  txt-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    backgroud: #fff;
    color: #f57c00;
  }
`;
