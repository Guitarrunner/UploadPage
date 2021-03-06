import styled from "styled-components";

interface Props {
  o?: {
    id?: string;
    lightBg?: boolean;
    lightText?: boolean;
    lightTextDesc?: boolean;
    topLine?: string;
    headline?: string;
    description?: string;
    buttonLabel?: string;
    imgStart?: boolean;
    img?: any;
    alt?: string;
    dark?: boolean;
    dark2?: boolean;
    primary?: boolean;
    darkText?: boolean;
  };
}

export const InfoContainer = styled.div<Props>`
  color: #fff;
  background: ${(Props) => (Props.o?.lightBg ? "#f9f9f9" : "#04C4D9")};
  width: 100%;
  overflow-x: hidden;

  overflow-y: hidden;
  @media screen and (max-width: 760px) {
    padding: 50px 0;
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
  @media screen and (max-width: 1000px) {
    transition: all 0.2s ease-in-out;
    height: 100vh;
  }
`;

export const InfoRow = styled.div<Props>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  padding: 30px;
  grid-template-areas: ${(Props) =>
    Props.o?.imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 760px) {
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
export const TopLine = styled.p<Props>`
  color: ${(Props) => (Props.o?.lightText ? "#fff" : "#04C4D9")};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transfor: uppercase;
  margin-bottom: 16px;
`;
export const Heading = styled.h1<Props>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${(Props) => (Props.o?.lightText ? "#101522" : "#010606")};

  @media screen and (max-width: 400px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p<Props>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${(Props) => (Props.o?.darkText ? "#101522" : "#010606")};
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
