import React, { useState } from "react";
import { FooterA } from "../../components/Footer/FooterElements";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";

import {
  Button,
  CoursesCard,
  CoursesH1,
  CoursesH2,
  CoursesIcon,
  CoursesP,
  CoursesP2,
  CoursesWrapper,
  CoursesSection,
  Courses2Wrapper,
  CoursesP3,
  SimpleWrapper,
  CoursesP4,
} from "./CoursesElements";

const Courses = ({ data }: { data: any }) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="courses" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <CoursesSection>
        <CoursesWrapper>
          <CoursesH1>NOSSOS CURSOS</CoursesH1>
          <CoursesP2>
            Dos 5 aos 105 anos de idade, todos podem aprender
          </CoursesP2>

          <Courses2Wrapper>
            {data.map((data: any, index: any) => {
              return (
                <FooterA href={data.link}>
                  <CoursesCard key={index}>
                    <CoursesIcon src={data.icon} />
                    <CoursesH2>{data.h} </CoursesH2>
                    <CoursesP>{data.p}</CoursesP>
                    <SimpleWrapper>
                      <CoursesP3>Habilidades desenvolvidas:</CoursesP3>
                      <CoursesP4>{data.p2}</CoursesP4>
                    </SimpleWrapper>
                  </CoursesCard>
                </FooterA>
              );
            })}
          </Courses2Wrapper>
        </CoursesWrapper>
      </CoursesSection>
    </>
  );
};
export default Courses;
