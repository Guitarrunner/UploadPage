import styled from "styled-components";

export const SingelCourseSection = styled.section`
  background: #04c4d9;
  margin-top: 150px;
  height: 810px;
  overflow: hidden;

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }
`;

export const SingelCourseWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 510px;
  margin-top: 100px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    transition: all 0.2s ease-in-out;
    height: 100vh;
  }
`;
