import React, { useState, FunctionComponent } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ColumnSection from "../ColumnSection";
import InfoSection from "../InfoSection";
import { homObjOne, homObjTwo } from "../InfoSection/Data";

const Home: FunctionComponent = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <InfoSection {...homObjOne} />
      <InfoSection {...homObjTwo} />
      <ColumnSection />
      <InfoSection {...homObjTwo} />
      <InfoSection {...homObjOne} />
    </>
  );
};

export default Home;
