import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { UnitSection, UnitWrapper } from "./UnitElements";

const Units = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <UnitSection>
        <UnitWrapper></UnitWrapper>
      </UnitSection>
    </>
  );
};

export default Units;
