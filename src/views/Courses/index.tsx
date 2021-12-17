import React, { useState } from "react";
import { Button } from "../../components/ButtonElement/ButtonElements";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";

import {
  CoursesCard,
  CoursesH1,
  CoursesH2,
  CoursesIcon,
  CoursesP,
  CoursesP2,
  CoursesWrapper,
  CoursesSection,
  Courses2Wrapper,
} from "./CoursesElements";

const Courses = ({ data }: { data: any }) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
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
                <CoursesCard key={index}>
                  <CoursesIcon src={data.icon} />
                  <CoursesH2>{data.h} </CoursesH2>
                  <CoursesP>{data.p}</CoursesP>
                  <CoursesP>Habilidades desenvolvidas:</CoursesP>
                  <CoursesP>{data.p2}</CoursesP>
                  <Button to={data.link}>Mais informação</Button>
                </CoursesCard>
              );
            })}
          </Courses2Wrapper>
        </CoursesWrapper>
      </CoursesSection>
    </>
  );
};
export default Courses;
