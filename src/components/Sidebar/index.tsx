import React from "react";
import { Button } from "../ButtonElement/ButtonElements";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }: { isOpen: any; toggle: any }) => {
  return (
    <SidebarContainer o={(isOpen = { isOpen })} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="courses" onClick={toggle}>
            Cursos
          </SidebarLink>
          <SidebarLink to="units" onClick={toggle}>
            Unidades
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contato
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Sobre nos
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Iniciar sessão
          </SidebarLink>

          <SideBtnWrap>
            <Button to="/singin" onClick={toggle}>
              Cadastre-se
            </Button>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
