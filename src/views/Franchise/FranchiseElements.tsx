import styled from "styled-components";

export const FranchiseSection = styled.section`
  background: #04c4d9;
  margin-top: 150px;
  height: 1800px;
  overflow: hidden;

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }
`;

export const FranchiseWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 510px;
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

export const FranchiseWrapper2 = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  height: 510px;
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

export const FranchiseWrapper3 = styled.div`
  position: relative;
  display: grid;
  z-index: 2;
  height: 510px;
  width: 100%;
  overflow: hidden;
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

export const FranchiseImage = styled.img`
  position: absolute;
  width: 100%;
`;
