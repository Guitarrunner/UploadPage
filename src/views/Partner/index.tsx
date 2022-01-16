import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import {
  PartnerImage,
  PartnerSection,
  PartnerWrapper,
  PartnerWrapper2,
} from "./PartnerElements";
import "./index.css";
import "./index.scss";
import icon from "./robot1.svg";
import fondo from "./fondo.svg";
import Feature from "../../components/Feature/Feature";
import { FooterA } from "../../components/Footer/FooterElements";

function Partner() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="partner" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <PartnerSection>
        <PartnerWrapper>
          <div className="gpt3__whatgpt3-feature">
            <Feature
              title="Quem somos"
              text="A Upload Escola de Tecnologia nasceu do sonho de transformação do sistema de ensino do Brasil a partir da inserção da tecnologia nas escolas e no desenvolvimento e preparação de nossos alunos para o futuro. Foi pensando na realidade do nosso país que seus fundadores perceberam a necessidade de trazer inovações profundas para dentro das salas de aula."
            />
          </div>
          <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">
              Incorpore o ensino Upload e prepare seus alunos para os desafios
              da era digital
            </h1>
            <img src={icon} width="100px" height="100px" />
          </div>
          <div className="gpt3__whatgpt3-container">
            <Feature
              title="Curricular"
              text="Com a popularidade do período integral nas escolas, essas precisam de novos conteúdos de qualidade para a grade estendida. Nessa modalidade, a Upload entra como matéria obrigatória na grade curricular e envia professores para ministrar as aulas ou fornece treinamento de capacitação para os educadores da escola."
            />
            <Feature
              title="Convênio"
              text="Caso o aluno de  uma de nossas parcerias deseje ter um conhecimento mais aprofundado ou mesmo fazer um curso diferente do que frequenta em sala de aula, damos condições especiais para que ele faça as aulas em uma de nossas unidades, ganhando assim atenção direcionada e preço mais acessível"
            />
            <Feature
              title="Extracurricular"
              text="Nessa modalidade, os professores da Upload vão à escola para ministrar as aulas. A instituição de ensino fornece o laboratório com computadores para turmas de, no máximo, X alunos. O educador aplica o mesmo curso que é ensinado nas nossas unidades e também conta com o mesmo suporte pedagógico."
            />
          </div>
        </PartnerWrapper>
        <PartnerWrapper2>
          <link
            href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
            rel="stylesheet"
          />
          <FooterA href="http://localhost:3000/form">
            <button className="noselect">Seja uma escola parceira</button>
          </FooterA>
          <PartnerImage src={fondo} />
        </PartnerWrapper2>
        <PartnerWrapper>
          <section className="dl-blurbs">
            <dl className="dl">
              <dt className="dt">Material didático próprio e completo </dt>
              <dd className="dd">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </dd>
              <dt className="dt">Sala de aula invertida </dt>
              <dd className="dd">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </dd>
              <dt className="dt">Grades curriculares adequadas</dt>
              <dd className="dd">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </dd>
              <dt className="dt">
                Treinamento e certificação da equipe UPLOAD
              </dt>
              <dd className="dd">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </dd>
            </dl>
            <dl className="dl">
              <dt className="dt">Currículo alinhado com a BNCC</dt>
              <dd className="dd">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </dd>
              <dt className="dt">
                Solução completa no ensino de amplas tecnologias
              </dt>
              <dd className="dd">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </dd>

              <dt className="dt">Suporte tecnológico</dt>
              <dd className="dd">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </dd>
              <dt className="dt">Método de ensino próprio alinhando - STEAM</dt>
              <dd className="dd">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </dd>
            </dl>
          </section>
        </PartnerWrapper>
      </PartnerSection>
    </>
  );
}

export default Partner;
