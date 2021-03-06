import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { FormSection, FormWrapper } from "./FormElements";
import "./index.css";

function Form() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="blog" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FormSection>
        <FormWrapper>
          <div className="login-box">
            <h2>Seja um parceiro UPLOAD</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required={true} />
                <label>Nome</label>
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
                <label>Cidade</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required={true} />
                <label>Nome da instituicao</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required={true} />
                <label>Cargo</label>
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
        </FormWrapper>
      </FormSection>
    </>
  );
}

export default Form;
