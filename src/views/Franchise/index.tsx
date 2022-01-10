import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";

import "./index.css";
import { FranchiseSection, FranchiseWrapper } from "./FranchiseElements";

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
        <FranchiseWrapper>
          <section className="cards-wrapper">
            <div className="card-grid-space">
              <a
                className="card"
                href="https://codetheweb.blog/2017/10/06/html-syntax/"
              >
                <div>
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
              <a
                className="card"
                href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
              >
                <div>
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
              <a
                className="card"
                href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
              >
                <div>
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
