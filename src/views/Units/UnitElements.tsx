import styled from "styled-components";

export const UnitSection = styled.section`
  background: #04c4d9;
  margin-top: 150px;
  height: 1450px;
  overflow-x: hidden;

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 900px) {
    transition: all 0.2s ease-in-out;
    height: 3000px;
  }
`;

export const UnitWrapper = styled.div`
  margin-top: 40px;
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

export const InfoContainer = styled.div`
  margin-top: 10px;

  color: #fff;
  border-radius: 50px;
  background: #f9f9f9;
  width: 90%;
  overflow-x: hidden;
  height: 250px;
  margin-bottom: 10px;
  margin-bottom: 10px;

  overflow-y: hidden;
  @media screen and (max-width: 900px) {
    transition: all 0.2s ease-in-out;
    height: 470px;
  }
  @media screen and (max-width: 760px) {
    padding: 50px 0;
    width: 92%;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 500px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 900px) {
    transition: all 0.2s ease-in-out;
    height: 1000px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);

  padding: 30px;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 900px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
  @media screen and (max-width: 400px) {
    margin-left: -10%;
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 600px;
  paddig-top: auto;
  paddig-bottom: 60px;
  @media screen and (max-width: 400px) {
    max-width: 270px;
  }
`;
export const TopLine = styled.p`
  color: #04c4d9;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transfor: uppercase;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #101522;
  @media screen and (max-width: 900px) {
    font-size: 40px;
  }
  @media screen and (max-width: 400px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: #101522;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  margin: 0 0 10px 0;
  width: 80%;
  height: auto;
  padding-right: 0;
`;

export const Map = styled.iframe`
  frameborder: 0;
  border: 1;
  aria-hidden: false;
  tabindex: 0;
  width: 100%;
  height: 100%;
  loading: lazy;
`;
