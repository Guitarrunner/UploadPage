import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import {
  SingelCourseSection,
  SingelCourseWrapper,
} from "./SingleCourseElements";

function SingleCourse({ data }: { data: any }) {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="blog" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SingelCourseSection>
        <SingelCourseWrapper>
          <p>{data}</p>
        </SingelCourseWrapper>
      </SingelCourseSection>
    </>
  );
}

export default SingleCourse;
