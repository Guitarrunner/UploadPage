import React, { useState, FunctionComponent } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ColumnSection from "../ColumnSection";
import InfoSection from "../InfoSection";
import Carrousel from "../Carrousel";
import Video from "../Video";
import { homObjOne, homObjThree, homObjTwo } from "../InfoSection/Data";
import { CarrouselData } from "../Carrousel/CarrouselData";
import Landing from "../Landing";

const Home: FunctionComponent = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} on="home" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Landing />
      <Carrousel slides={CarrouselData} />
      <InfoSection {...homObjOne} />
      <ColumnSection />
      <InfoSection {...homObjTwo} />
      <InfoSection {...homObjThree} />
      <Video />
    </>
  );
};

export default Home;
