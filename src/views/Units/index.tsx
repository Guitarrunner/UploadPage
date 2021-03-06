import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import {
  Column1,
  Column2,
  Heading,
  InfoContainer,
  InfoRow,
  Map,
  Subtitle,
  TextDiv,
  TextWrapper,
  TopLine,
  UnitSection,
  UnitWrapper,
} from "./UnitElements";

const Units = ({ data }: { data: any }) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar toggle={toggle} on="units" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <UnitSection>
        <UnitWrapper>
          {data.map((data: any, index: any) => {
            return (
              <InfoContainer>
                <InfoRow id={data.id}>
                  <Column1>
                    <TextWrapper>
                      <TextDiv>
                        <TopLine>{data.top}</TopLine>
                        <Heading>{data.headline}</Heading>
                      </TextDiv>
                      <Subtitle>Horário de funcionamento: </Subtitle>
                      <Subtitle>{data.text}</Subtitle>
                      <Subtitle>{data.tel}</Subtitle>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <Map src={data.src}></Map>
                  </Column2>
                </InfoRow>
              </InfoContainer>
            );
          })}
        </UnitWrapper>
      </UnitSection>
    </>
  );
};

export default Units;
