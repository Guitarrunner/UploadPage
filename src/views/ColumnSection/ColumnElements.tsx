import styled from "styled-components";

export const ColumnContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  overflow-y: hidden;
  width: 100%;
  justify-content: center;
  align-items: center;

  background: #04c4d9;

  @media screen and (max-width: 1200px) {
    transition: all 0.2s ease-in-out;
    height: 1100px;
  }

  @media screen and (max-width: 700px) {
    transition: all 0.2s ease-in-out;
    height: 1300px;
  }
`;

export const ColumnWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ColumCard = styled.div`
background: #f9f9f9;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&.hover{
    transform; scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}`;

export const ColumnIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ColumnH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 16px;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-left: -30%;
  }
`;

export const ColumnH2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
  color: #101522;
`;

export const ColumnP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #101522;
  
  }
`;

export const ColumnP2 = styled.p`
color: #101522;
width: 70vw;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 32px;
  @media screen and (max-width: 760px) {
    margin-left: -10%;
    text-align: left;
    max-width: 230px;
  }
  }
`;
