import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #101522;
  width: 100%;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1110px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
align-items: center;
margin: 16px;
text-align: left;
width: 250px;
box-sizing: border-box;
color #fff;
 @media screen and (max-width: 420px) {
     margin: 0;
     padding: 10px;
     widht: 100%;
     justify-items:center;
  }`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  color: #04c4d9;
`;

export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none
margin-bottom: 0.5rem;
font-size: 14px;
cursor: pointer;

&:hover{
    color:#04C4D9;
    transition: 0.3s ease-out;
}`;

export const FooterP = styled.p`
color: #fff;
text-decoration: none
margin-bottom: 0.5rem;
font-size: 14px;
cursor: pointer;

&:hover{
    color:#04C4D9;
    transition: 0.3s ease-out;
}`;

export const SocialMedia = styled.section`
  max-widht: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
