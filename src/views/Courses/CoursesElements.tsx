import styled from "styled-components";

export const CoursesSection = styled.section`
  background: #04c4d9;
  margin-top: 150px;
  height: 510px;
  overflow-x: hidden;

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
  height: 510px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    transition: all 0.2s ease-in-out;
    height: 100vh;
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

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CoursesCard = styled.div`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 400px;
  max-height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CoursesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const CoursesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 16px;
  margin-bottom: 32px;
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
  font-size: 1rem;
  text-align: center;
  color: #101522;
  
  }
`;

export const CoursesP2 = styled.p`
  color: #101522;
  width: 70vw;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
  margin-left: 7%;
`;
