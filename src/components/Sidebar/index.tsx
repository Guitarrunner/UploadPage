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
  SidebarRoute,
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
            Courses
          </SidebarLink>
          <SidebarLink to="units" onClick={toggle}>
            Units
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>

          <SideBtnWrap>
            <Button to="/singin" onClick={toggle}>
              Sign In
            </Button>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
