import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/sigin">Link</FooterLink>
                <FooterLink to="/sigin">Link</FooterLink>
                <FooterLink to="/sigin">Link</FooterLink>
                <FooterLink to="/sigin">Link</FooterLink>
                <FooterLink to="/sigin">Link</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Courses</FooterLinkTitle>
                <FooterLink to="/sigin">Link</FooterLink>
                <FooterLink to="/sigin">Link</FooterLink>
                <FooterLink to="/sigin">Link</FooterLink>
                <FooterLink to="/sigin">Link</FooterLink>
                <FooterLink to="/sigin">Link</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <WebsiteRights>
                UPLOAD © {new Date().getFullYear()} All rights reserved
              </WebsiteRights>
              <SocialLogo to="/">UPLOAD</SocialLogo>

              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Instasgram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="WhatsApp">
                  <FaWhatsapp />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
