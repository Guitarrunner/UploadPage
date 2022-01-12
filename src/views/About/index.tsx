import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { AboutSection, AboutWrapper } from "./AboutElements";
import "./index.scss";

function About() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="about" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AboutSection>
        <AboutWrapper>
          <div className="cards">
            <div className="card3 content">
              <div className="card3-content">
                <div className="card3-img">
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt="Gamer"
                  />
                </div>
                <div className="card3-label">Por que</div>
                <div className="card3-title">Por que estudar tecnologia?</div>
              </div>
            </div>
            <div className="card3 content">
              <div className="card3-content">
                <div className="card3-img">
                  <img
                    src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="keyboard"
                  />
                </div>
                <div className="card3-label">Uploader</div>
                <div className="card3-title">Por que escolher a Upload?</div>
              </div>
            </div>
            <div className="card3 content">
              <div className="card3-content">
                <div className="card3-img">
                  <img
                    src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80"
                    alt="Controller"
                  />
                </div>
                <div className="card3-label">Cursos </div>
                <div className="card3-title">Nossos Cursos mais procurados</div>
              </div>
            </div>
            <div className="card3 form2">
              <div className="form2-title">Cadestre-se</div>
            </div>
          </div>
        </AboutWrapper>
      </AboutSection>
    </>
  );
}

export default About;
