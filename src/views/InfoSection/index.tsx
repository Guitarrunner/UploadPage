import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Column1,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";
const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
}: {
  lightBg: any;
  id: any;
  imgStart: any;
  topLine: any;
  lightText: any;
  headline: any;
  darkText: any;
  description: any;
  buttonLabel: any;
  img: any;
  alt: any;
  primary: any;
  dark: any;
  dark2: any;
}) => {
  return (
    <>
      <InfoContainer o={((id = { id }), (lightBg = { lightBg }))}>
        <InfoWrapper>
          <InfoRow o={(imgStart = { imgStart })}>
            <Column1>
              <TextWrapper>
                <TopLine o={(lightText = { lightText })}>{topLine}</TopLine>
                <Heading o={(lightText = { lightText })}>{headline}</Heading>
                <Subtitle o={(darkText = { darkText })}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
