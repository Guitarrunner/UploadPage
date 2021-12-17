import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { AboutSection, AboutWrapper } from "./AboutElements";

function About() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AboutSection>
        <AboutWrapper></AboutWrapper>
      </AboutSection>
    </>
  );
}

export default About;
