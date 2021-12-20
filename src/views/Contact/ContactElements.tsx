import styled from "styled-components";

export const ContactSection = styled.section`
  background: #04c4d9;
  margin-top: 150px;
  height: 550px;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 900px) {
    transition: all 0.2s ease-in-out;
    height: 600px;
  }
`;

export const ContactWrapper = styled.div`
  margin-top: 2%;
  z-index: 1;
  height: 550px;
  width: 80%;
  left: 50%;
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
  height: 500px;
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
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  @media screen and (max-width: 900px) {
    transition: all 0.2s ease-in-out;
    height: 1000px;
  }
`;

export const UnitH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 16px;
  left: 50%;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-left: -30%;
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
  margin: auto;
  @media screen and (max-width: 400px) {
    max-width: 270px;
  }
`;

export const Form2 = styled.form`
  max-width: 400px;
  width: auto;
  height: 350px;
  max-height: 350px;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rbga(0, 0, 0, 0.9);

  @media screen and (max-width: 900px) {
    max-width: 300px;
    padding: 32px 32px;
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
  position: relative;
  background: #101522;
  width: 400px;
  height: 350px;
  max-height: 350px;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rbga(0, 0, 0, 0.9);

  @media screen and (max-width: 900px) {
    max-width: 300px;
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-top: -16px;
  color: #fff;
  font-size: 20px;
  height: 20px;
  font-weight: 400;
  text-align: center;
`;

export const InputWrapper = styled.div`
  margin-top: -64px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 8px;
  height: 5px;
  width: 90%;
  border: none;
  border-radius: 4px;
`;

export const FormInput2 = styled.input`
  padding: 16px 16px;
  height: 50px;
  width: 90%;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  position: absolute;
  background: #04c4d9;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  width: 200px;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  left: 30%;
  bottom: 5%;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f57c00;
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
`;
