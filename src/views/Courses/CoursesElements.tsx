import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const CoursesSection = styled.section`
  background: #04c4d9;
  margin-top: 150px;
  height: 1450px;
  overflow-x: hidden;
  @media screen and (max-width: 1200px) {
    transition: all 0.2s ease-in-out;
    height: 2200px;
  }
  @media screen and (max-width: 760px) {
    transition: all 0.2s ease-in-out;
    height: 3800px;
  }
  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CoursesWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 550px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  justify-content: center;
`;
export const SimpleWrapper = styled.div`
  background: #f57c00;
  width: 90%;
  height: 17%;
  border-radius: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 82%;

  @media screen and (max-width: 760px) {
    top: 85%;
    height: 12%;
    width: 95%;
  }
`;
export const Courses2Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CoursesCard = styled.div`
  background: #f9f9f9;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 350px;
  max-height: 500px;
  padding: 20px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    width: 85%;
    margin-left: -7%;
    margin-right: 7%;
  }
`;

export const CoursesIcon = styled.img`
  height: 128px;
  width: 128px;
  margin-bottom: 10px;
`;

export const CoursesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 16px;
  margin-bottom: 16px;
  left: 50%;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-left: -30%;
  }
`;

export const CoursesH2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
  color: #101522;
`;

export const CoursesP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  max-width: 80%;
  color: #101522;
  margin-top: 12px;
  
  }
`;

export const CoursesP2 = styled.p`
  color: #101522;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  left: 50%;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    max-width: 70%;
    text-align: left;
  }
`;

export const CoursesP3 = styled.p`
  color: #101522;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
`;

export const CoursesP4 = styled.p`
  font-size: 0.85rem;
  text-align: center;
  max-width: 50%;
  color: #101522;
  margin-right:2%;
  @media screen and (max-width:  760px) {
    max-width: 60%;
  }
  
  }
`;

export const Button = styled(LinkR)`
  position: absolute;
  border-radius: 50px;
  background: #101522;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  bottom: 2%;
  
  text-decoration: none;
  justify-content: center;
  align-items: center:
  transition: all 0.2s ease-in-out;

  &:hover{
      transition: all 0.2s ease-in-out;
      background:#F57C00;
  }
`;
