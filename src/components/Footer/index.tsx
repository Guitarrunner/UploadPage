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
  FooterP,
} from "./FooterElements";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Cursos</FooterLinkTitle>
                <FooterLink to="/">Robótica</FooterLink>
                <FooterLink to="/">Youtuber</FooterLink>
                <FooterLink to="/">MineMods</FooterLink>
                <FooterLink to="/">Games 2D</FooterLink>
                <FooterLink to="/">Games 3D</FooterLink>
                <FooterLink to="/">Artes digitais</FooterLink>
                <FooterLink to="/">Edição de vídeo</FooterLink>
                <FooterLink to="/">Criação de sites</FooterLink>
                <FooterLink to="/">Desenvolvimento de aplicativos</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contate-nos</FooterLinkTitle>
                <FooterP>Tel: (71) 3506-3604</FooterP>
                <FooterP>WhatsApp: (71) 99377-6497</FooterP>
                <FooterP>Email: escolaupload@gmail.com</FooterP>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Unidades</FooterLinkTitle>
                <FooterLink to="/">Salvador - Imbuí</FooterLink>
                <FooterLink to="/">Salvador - Brotas</FooterLink>
                <FooterLink to="/">Jequié</FooterLink>
                <FooterLink to="/">Ilhéus</FooterLink>
                <FooterLink to="/">Pindamonhangaba</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <WebsiteRights>
                UPLOAD © {new Date().getFullYear()}
                Todos os direitos reservados
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
