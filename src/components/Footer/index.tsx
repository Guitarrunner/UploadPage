import React from "react";
import { animateScroll as scroll } from "react-scroll";
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
  FooterA,
} from "./FooterElements";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
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
                <FooterA target="_blank" href="tel:+557135063604">
                  <FooterP>Tel: (71) 3506-3604</FooterP>
                </FooterA>
                <FooterA target="_blank" href="https://wa.link/tinzf7">
                  <FooterP>WhatsApp: (71) 99377-6497</FooterP>
                </FooterA>
                <FooterA target="_blank" href="mailto:escolaupload@gmail.com">
                  <FooterP>Email: escolaupload@gmail.com</FooterP>
                </FooterA>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Unidades</FooterLinkTitle>
                <FooterLink to="/">Salvador - Imbuí</FooterLink>
                <FooterLink to="/">Salvador - Pituba</FooterLink>
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
              <SocialLogo to="/" onClick={toggleHome}>
                UPLOAD
              </SocialLogo>

              <SocialIcons>
                <SocialIconLink
                  href="https://m.facebook.com/uploadescola/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://instagram.com/uploadescola?utm_medium=copy_link"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://youtube.com/channel/UCQqHGVL4RGTg2E5UkdQ9xXQ"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="https://wa.link/tinzf7"
                  target="_blank"
                  aria-label="WhatsApp"
                >
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
