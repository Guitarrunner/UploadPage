import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import About from "./views/About";
import Contact from "./views/Contact";
import Courses from "./views/Courses";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import Units from "./views/Units";
import { CoursesData } from "./views/Courses/CoursesData";
import { UnitsData } from "./views/Units/UnitsData";
import Partner from "./views/Partner";
import Franchise from "./views/Franchise";
import Blog from "./views/Blog";
import SingleCourse from "./views/SingleCourse";
import Form from "./views/Form";

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {} /*
  let xx = document.getElementById("header")!.style.backgroundColor;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    xx = "white";
  } else {
    xx = "gray";
  }
}*/
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cursos" element={<Courses data={CoursesData} />} />
          <Route path="/unidades" element={<Units data={UnitsData} />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/parcerias" element={<Partner />} />
          <Route path="/franqueado" element={<Franchise />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/form" element={<Form />} />
          <Route
            path={"/cursos/artesdigitais"}
            element={<SingleCourse data={"Artes Digitais"} />}
          />
          <Route
            path={"/cursos/criacaodesites"}
            element={<SingleCourse data={"Criação de sites"} />}
          />
          <Route
            path={"/cursos/aplicativos"}
            element={<SingleCourse data={"Aplicativos"} />}
          />
          <Route
            path={"/cursos/edicaodevideo"}
            element={<SingleCourse data={"Edição de video"} />}
          />
          <Route
            path={"/cursos/games2d"}
            element={<SingleCourse data={"Games 2d"} />}
          />
          <Route
            path={"/cursos/games3d"}
            element={<SingleCourse data={"Games 3d"} />}
          />
          <Route
            path={"/cursos/minemods"}
            element={<SingleCourse data={"Minemods"} />}
          />
          <Route
            path={"/cursos/robotica"}
            element={<SingleCourse data={"Robotica"} />}
          />
          <Route
            path={"/cursos/youtuber"}
            element={<SingleCourse data={"Youtuber"} />}
          />
        </Routes>
        <Footer />
      </Router>
      <div>
        <div className="wrapper">
          <div className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://m.facebook.com/uploadescola/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </span>
          </div>
          <div className="icon whatsapp">
            <div className="tooltip">WhatsApp</div>
            <span>
              <a target="_blank" rel="noreferrer" href="https://wa.link/tinzf7">
                <i className="fab fa-whatsapp"></i>
              </a>
            </span>
          </div>

          <div className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/uploadescola?utm_medium=copy_link"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </span>
          </div>
          <div className="icon blog">
            <div className="tooltip">Blog</div>
            <span>
              <a target="_blank" rel="noreferrer" href="https://google.com">
                <i className="fab fa-blogger"></i>
              </a>
            </span>
          </div>
          <div className="icon youtube">
            <div className="tooltip">Youtube</div>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://youtube.com/channel/UCQqHGVL4RGTg2E5UkdQ9xXQ"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
