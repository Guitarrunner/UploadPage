import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const CarouselSection = styled.section`
  background: #04c4d9;
  margin-top: 150px;
  height: 510px;
  overflow: hidden;

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }
`;

export const CarouselWrapper = styled.div`
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
  z-index: 1;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
`;

export const CarouselSlider = styled.div`
position:absolute;
top:35%;
left:10%;
width: 100%:
height:100%;

&::before{
  content:'';
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 80vh;
  bottom:0vh;
  left: 0;
  overflow:hidden;
  opacity: 0.4;
}
@media screen and (max-width: 400px) {
    top: 25%;
    left: 7%;
  }
`;

export const CarouselImage = styled.img`
  display: flex;
  width: 70vw;
  height: 50vh;

  object-fit: cover;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

export const CarouselContent = styled.div`
  z-index: 10;
  top: 0%;
  left: 50%;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #000;
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

export const CarouselH1 = styled.h1`
  color: #ffffff;
  line-height: 72px;
  font-size: clamp(1rem, 8vw, 2rem);
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  text-align: left;
  margin-bottom: 0.8rem;
`;

export const CarouselP = styled.p`
  margin-top: -3%;
  font-weight: 550;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  color: #000;
  @media screen and (max-width: 400px) {
    margin-top: -15%;
  }
`;

export const CarouselButtons = styled.button`
  position: absolute;
  bottom: 5%;
  left: 40%;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  background: none;
  z-index: 4;
  @media screen and (max-width: 700px) {
    bottom: 5%;
    left: 47%;
  }
  @media screen and (max-width: 400px) {
    bottom: 10%;
    left: 30%;
  }
`;

export const PrevArrow = styled(IoArrowBack)`
width: 20px;
height: 20px;
color: #fff;
cursor: pointer;
border-radius: 50px;
background: #000d1a;
padding: 10px;
margin-right: 1rem;
user-select:none;
transition: 0.3s;

&:hover{
  background:#F57C00;
  transform: scale{1.05};
}`;

export const NextArrow = styled(IoArrowForward)`
width: 20px;
height: 20px;
color: #fff;
cursor: pointer;
border-radius: 50px;
background: #000d1a;
padding: 10px;
margin-right: 1rem;
user-select:none;
transition: 0.3s;

&:hover{
  background:#F57C00;
  transform: scale{1.05};
}`;
