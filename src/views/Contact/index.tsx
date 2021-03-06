import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import {
  Column1,
  Column2,
  ContactSection,
  ContactWrapper,
  Form,
  Form2,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormInput2,
  FormLabel,
  Heading,
  InfoContainer,
  InfoRow,
  InputWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./ContactElements";

const Contact = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="contact" />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <ContactSection>
        <ContactWrapper>
          <InfoContainer>
            <InfoRow>
              <Column1>
                <TextWrapper>
                  <Form2>
                    <TopLine>
                      Av. Jorge Amado, 2464 Shopping Imbui Plaza, Loja 109
                      Salvador, BA
                    </TopLine>
                    <Heading>Contate-nos</Heading>
                    <Subtitle>
                      Em caso de dúvidas, entre em contato com nossa secretaria
                      ou através do formulário.
                    </Subtitle>
                    <div>
                      <Subtitle>Horário de funcionamento: </Subtitle>
                      <Subtitle>de Segunda a Sábado das 8h às 20h</Subtitle>
                    </div>
                  </Form2>
                </TextWrapper>
              </Column1>
              <Column2>
                <FormContent>
                  <Form action="#">
                    <FormH1>Deixe o seu comentário</FormH1>
                    <InputWrapper>
                      <FormLabel htmlFor="for">Email</FormLabel>
                      <FormInput type="email" required></FormInput>
                    </InputWrapper>
                    <InputWrapper>
                      <FormLabel htmlFor="for">Nome</FormLabel>
                      <FormInput type="text" required></FormInput>
                    </InputWrapper>
                    <InputWrapper>
                      <FormLabel htmlFor="for">Mensagem</FormLabel>
                      <FormInput2 type="textarea" required></FormInput2>
                    </InputWrapper>
                    <FormButton type="submit">Prosseguir</FormButton>
                  </Form>
                </FormContent>
              </Column2>
            </InfoRow>
          </InfoContainer>
        </ContactWrapper>
      </ContactSection>
    </>
  );
};

export default Contact;
