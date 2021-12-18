import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { ContactSection, ContactWrapper } from "./ContactElements";

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
        <ContactWrapper></ContactWrapper>
      </ContactSection>
    </>
  );
};

export default Contact;
