import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
min-height: 692px;
position. fixed;
bottom: 0;
left: 0;
right: 0;
top:0;
z-index:0;
overflow: hidden;
background: linear-gradient(108deg, rgba(1,147,86,1) 0%,rgba(10,201,122,1) 100%);
`;

export const FormWrap = styled.div`
  heigth: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screaan and (max-width: 400px) {
    height: 80%;
  }
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
  justijy-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rbga(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
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
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
