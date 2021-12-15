import styled from "styled-components";

interface Props {
  o?: {
    id?: string;
  };
}

export const CarrouselContainer = styled.div`
  color: #fff;
  overflow-x: hidden;
  overflow-y: hidden;
  background: #000;
  display: flex;
  margin-top: 160px;

  width: 100%;

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }
`;

export const CarrouselWrapper = styled.div`
  display: grid;
  z-index: 3;
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
