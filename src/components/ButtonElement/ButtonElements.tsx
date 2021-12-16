import styled from "styled-components";
import { Link } from "react-scroll";

import { Link as LinkR } from "react-router-dom";

interface Props {
  o?: {
    primary?: boolean;
    big?: boolean;
    dark?: boolean;
    dark2?: boolean;
    fontBig?: boolean;
  };
}

export const Button = styled(LinkR)<Props>`
  border-radius: 50px;
  background: ${(Props) => (Props.o?.primary ? "#01bf71" : "#101522")};
  white-space: nowrap;
  padding: ${(Props) => (Props.o?.big ? `14px 48px` : `12px 30px`)};
  color: ${(Props) => (Props.o?.dark ? "#010606" : "#fff")};
  font-size: ${(Props) => (Props.o?.fontBig ? `20px` : `16px`)};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center:
  transition: all 0.2s ease-in-out;

  &:hover{
      transition: all 0.2s ease-in-out;
      background:${(Props) => (Props.o?.primary ? "#fff" : "#F57C00")};
  }
`;
