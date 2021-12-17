import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { ContactSection, ContactWrapper } from "./ContactElements";

const Contact = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ContactSection>
        <ContactWrapper></ContactWrapper>
      </ContactSection>
    </>
  );
};

export default Contact;
