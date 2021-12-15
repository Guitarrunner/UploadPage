import styled from "styled-components";

interface Props {
  o?: {
    id?: string;
  };
}

export const VideoContainer = styled.div`
  color: #fff;
  background: #f9f9f9;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  max-width: 1100px;
  width: auto;
  height: auto;
  margin-top: 12px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  height: 550px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 760px) {
    transition: all 0.2s ease-in-out;
    margin-top: 5px;
    height: 80vh;
  }
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-align: center;
  color: "#101522" @media screen and (max-width: 760px) {
    font-size: 32px;
  }
`;
