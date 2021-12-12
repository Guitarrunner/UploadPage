import React from "react";
import icon1 from "./creativity.svg";
import icon2 from "./conversation.svg";
import icon3 from "./investing.svg";
import {
  ColumnContainer,
  ColumnWrapper,
  ColumnH1,
  ColumCard,
  ColumnIcon,
  ColumnH2,
  ColumnP,
} from "./ColumnElements";
const ColumnSection = () => {
  return (
    <>
      <ColumnContainer>
        <ColumnH1>Nosotros</ColumnH1>
        <ColumnWrapper>
          <ColumCard>
            <ColumnIcon src={icon1} />
            <ColumnH2>Valores </ColumnH2>
            <ColumnP>Info</ColumnP>
          </ColumCard>
          <ColumCard>
            <ColumnIcon src={icon2} />
            <ColumnH2>Mision </ColumnH2>
            <ColumnP>Info</ColumnP>
          </ColumCard>
          <ColumCard>
            <ColumnIcon src={icon3} />
            <ColumnH2>Vision </ColumnH2>
            <ColumnP>Info</ColumnP>
          </ColumCard>
        </ColumnWrapper>
      </ColumnContainer>
    </>
  );
};

export default ColumnSection;
