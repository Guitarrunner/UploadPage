import styled from "styled-components";

export const LandingSection = styled.section`
  background: #fff;
  margin-top: 150px;
  height: 510px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }
`;

export const LandingWrapper = styled.div`
  overflow: hidden;
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

export const CarouselSlide = styled.div`
  position: absolute;
  z-index: 1;
  left: 0px;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
`;

export const CarouselSlider = styled.div`
left:0px;
top:20px;
width: 100%:
height:100%;

&::before{
  content:'';
  position: absolute;
  z-index: 3;
  width: 100%;
  background:#04c4d9;
  height: 80vh;
  bottom:0vh;
  left: 0;
  overflow:hidden;
  opacity: 0.4;
}
@media screen and (max-width: 400px) {
  position: absolute;
    top: 25%;
    left: 7%;
  }
`;

export const CarouselImage = styled.img`
  display: flex;
  max-width: 100%;
  max-height: 100%;

  object-fit: cover;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

export const Img1 = styled.img`
  max-width: 100px;
  max-height: 100px;
`;
