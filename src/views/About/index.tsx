import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { AboutSection, AboutWrapper } from "./AboutElements";

function About() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="about" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AboutSection>
        <AboutWrapper></AboutWrapper>
      </AboutSection>
    </>
  );
}

export default About;
