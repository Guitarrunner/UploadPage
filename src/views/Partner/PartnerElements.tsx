import styled from "styled-components";

export const PartnerSection = styled.section`
  background: #04c4d9;
  margin-top: 160px;
  height: 1610px;
  overflow: hidden;

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }
`;

export const PartnerWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 510px;
  max-width: 1100px;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    transition: all 0.2s ease-in-out;
    height: 100vh;
  }
`;
