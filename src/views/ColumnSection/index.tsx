import React from "react";
import icon1 from "./sword.png";
import icon2 from "./sharingan.svg";
import icon3 from "./icon.png";
import {
  ColumnContainer,
  ColumnWrapper,
  ColumnH1,
  ColumCard,
  ColumnIcon,
  ColumnH2,
  ColumnP,
  ColumnP2,
} from "./ColumnElements";

const ColumnSection = () => {
  return (
    <>
      <ColumnContainer>
        <ColumnH1>Nosso DNA</ColumnH1>

        <ColumnP2>
          A Upload Escola de Tecnologia nasceu do sonho de transformação do
          sistema de ensino do Brasil a partir da inserção da tecnologia nas
          escolas e no desenvolvimento e preparação de nossos alunos para o
          futuro. Foi pensando na realidade do nosso país que seus fundadores
          perceberam a necessidade de trazer inovações profundas para dentro das
          salas de aula.
        </ColumnP2>

        <ColumnWrapper>
          <ColumCard>
            <ColumnIcon src={icon1} />
            <ColumnH2>Missão </ColumnH2>
            <ColumnP>
              Desenvolver e preparar nossos alunos para o futuro
            </ColumnP>
          </ColumCard>
          <ColumCard>
            <ColumnIcon src={icon2} />
            <ColumnH2>Vissão </ColumnH2>
            <ColumnP>
              Revolucionar a educação no Brasil através da ciência da computação
            </ColumnP>
          </ColumCard>
          <ColumCard>
            <ColumnIcon src={icon3} />
            <ColumnH2>Valores </ColumnH2>
            <ColumnP>
              Somos inovadores, colaborativos, responsáveis e motivados
            </ColumnP>
          </ColumCard>
        </ColumnWrapper>
      </ColumnContainer>
    </>
  );
};

export default ColumnSection;
