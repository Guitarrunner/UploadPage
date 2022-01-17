import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { ClassSection, ClassWrapper } from "./FormElements";
import "./index.css";

function FreeClass() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="blog" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ClassSection>
        <ClassWrapper>
          <div className="login-box">
            <h2>Agende uma aula experimental</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required={true} />
                <label>Nome</label>
              </div>
              <div className="user-box">
                <input type="password" name="" />
                <label>Nome do responsável (caso menor de idade)</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required={true} />
                <label>Idade</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required={true} />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required={true} />
                <label>Telefone</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required={true} />
                <label>Curso de Interesee</label>
              </div>
              <div className="user-box">
                <input type="password" name="" />
                <label>Mensagem</label>
              </div>
              <a href="http://localhost:3000">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Enviar
              </a>
            </form>
          </div>
        </ClassWrapper>
      </ClassSection>
    </>
  );
}

export default FreeClass;
