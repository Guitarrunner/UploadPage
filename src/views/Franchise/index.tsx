import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { FranchiseSection, FranchiseWrapper } from "./FranchiseElements";

function Franchise() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="franchise" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FranchiseSection>
        <FranchiseWrapper></FranchiseWrapper>
      </FranchiseSection>
    </>
  );
}

export default Franchise;
