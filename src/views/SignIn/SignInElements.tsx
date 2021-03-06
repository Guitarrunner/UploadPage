import styled from "styled-components";
export const Container = styled.div`
  height: 700px;
  overflow: hidden;
  z-index: 0;
  overflow: hidden;
  background: #04c4d9;
`;

export const FormWrap = styled.div`
  heigth: 100%;
  display: flex;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.img`
  position: fixed;
  left: 8vw;
  top: 0.1vh;
  width: 10vw;
  height: 10vw;
  background: none;
  overflow: hidden;
  padding: 10px 10px;
  overflow: visible;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    width: 17vh;
    height: 17vh;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #101522;
  width: 400px;
  height: 350px;
  max-height: 350px;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rbga(0, 0, 0, 0.9);
  @media screen and (max-width: 900px) {
    transition: all 0.2s ease-in-out;
    margin-top: 15%;
  }
  @media screen and (max-width: 749px) {
    transition: all 0.2s ease-in-out;
    margin-top: 20%;
  }
  @media screen and (max-width: 579px) {
    transition: all 0.2s ease-in-out;
    margin-top: 40%;
    width: 300px;
    padding: 40px 16px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 579px) {
    margin-left: -5%;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  @media screen and (max-width: 579px) {
    width: 75%;
  }
`;

export const FormButton = styled.button`
  background: #04c4d9;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  width: 400px;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f57c00;
  }
  @media screen and (max-width: 579px) {
    width: 75%;
    margin-left: 5%;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #f57c00;
  }
  @media screen and (max-width: 579px) {
    margin-left: -5%;
  }
`;
