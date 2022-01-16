import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { InfoRow } from "../Contact/ContactElements";
import ScrollToTop from "../ScrollToTop";
import "./index.css";
import {
  SingelCourseSection,
  SingelCourseWrapper,
} from "./SingleCourseElements";

function SingleCourse({ data, info }: { data: any; info: any }) {
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
          <div className="wrapperForm">
            <div className="blog_postForm">
              <div className="img_podForm">
                <img className="imgForm" src={info.image} alt="random image" />
              </div>
              <div className="container_copy">
                <h3 className="h3Form">{info.title}</h3>
                <h1 className="h1Form">{data}</h1>
                <p className="pForm">{info.description}</p>
              </div>
              <a className="btn_primaryForm" href="/contato">
                {info.button}
              </a>
            </div>
          </div>
        </SingelCourseWrapper>
      </SingelCourseSection>
    </>
  );
}

export default SingleCourse;
