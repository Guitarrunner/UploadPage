import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";

import "./index.css";
import "./index.scss";
import {
  FranchiseImage,
  FranchiseSection,
  FranchiseWrapper,
  FranchiseWrapper2,
  FranchiseWrapper3,
} from "./FranchiseElements";
import fondo from "./bg.jpg";
import { FooterA } from "../../components/Footer/FooterElements";

function Franchise() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="franchise" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FranchiseSection>
        <FranchiseWrapper2>
          <div className="blog-card spring-fever">
            <div className="title-content">
              <h3>EM ESCOLAS</h3>
              <hr />
              <div className="intro">
                Entre para a rede de ensino Upload e se torne um empreendedor de
                sucesso.
              </div>
            </div>
            <div className="card-info">
              A Upload potencializa o aprendizado dos alunos nas escolas aliando
              educação e tecnologia. Temos um sistema de ensino próprio para
              escolas.
            </div>
            <div className="utility-info">
              <ul className="utility-list"></ul>
            </div>
            <div className="gradient-overlay"></div>
            <div className="color-overlay"></div>
          </div>
          <div className="blog-card2 spring-fever">
            <div className="title-content">
              <h3>NOSSOS CURSOS</h3>
              <hr />
              <div className="intro">
                Conheça mais sobre o modelo de negócio e invista em um mercado
                inovador
              </div>
            </div>
            <div className="card-info">
              Dos 5 aos 105 anos, a Upload é para todos. Temos cursos com grades
              curriculares adequadas para cada faixa etária
            </div>
            <div className="utility-info">
              <ul className="utility-list"></ul>
            </div>
            <div className="gradient-overlay"></div>
            <div className="color-overlay"></div>
          </div>
        </FranchiseWrapper2>
        <FranchiseWrapper3>
          <link
            href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
            rel="stylesheet"
          />
          <FooterA href="http://localhost:3000/form">
            <button className="noselect">Seja uma escola parceira</button>
          </FooterA>
          <FranchiseImage src={fondo} />
        </FranchiseWrapper3>
        <FranchiseWrapper>
          <section className="cards-wrapper">
            <div className="card-grid-space">
              <a className="card">
                <div className="div1">
                  <h1>HENRIQUE GUIMARÃES</h1>
                  <p>
                    Eu só vejo benefícios ao falar da Upload. Inaugurei há pouco
                    tempo e já tenho uma resposta muito positiva do mercado.
                    Recebo todo o apoio da licenciadora, seja no suporte do
                    material didático ou no apoio do marketing. Fico muito feliz
                    em poder participar desta grande família!
                  </p>
                  <div className="tags">
                    <div className="tag">IPIAÚ</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="card-grid-space">
              <a className="card">
                <div className="div1">
                  <h1>PATRÍCIA FRANÇA</h1>
                  <p>
                    A experiência tem sido maravilhosa, apesar dos altos e
                    baixos de quem empreende. Os desafios que enfrentamos
                    diariamente, tentando mostrar a professores, diretores e
                    gestores e, sobretudo, aos pais, que não somos somente mais
                    um curso de informática, mas estamos oferecendo uma formação
                    tecnológica, ampliando os conhecimentos e aplicando a
                    tecnologia para o benefício da sociedade, nos faz acreditar
                    que vale a pena o desafio.
                  </p>
                  <div className="tags">
                    <div className="tag">ILHÉUS</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="card-grid-space">
              <a className="card">
                <div className="div1">
                  <h1>JÉSSICA CUNHA</h1>
                  <p>
                    O que posso falar é que estou realizada! O retorno tem sido
                    muito positivo por nosso público, principalmente pelas
                    crianças e jovens antenados no universo pop! Às vezes, tenho
                    algumas dúvidas e necessito do suporte, mas ao decorrer,
                    estamos nos conceituando sem problemas!
                  </p>
                  <div className="tags">
                    <div className="tag">JEQUIÉ</div>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </FranchiseWrapper>
      </FranchiseSection>
    </>
  );
}

export default Franchise;
