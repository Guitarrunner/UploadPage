import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Buttonn } from "./components/Buttonclass/ButtonclassElements";
import Footer from "./components/Footer";
import Home from "./views/Home";
import SignIn from "./views/SignIn";

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
  let scrollNav;
  if (document.body.scrollTop > 50) {
    scrollNav = true;
  } else {
    scrollNav = false;
  }

  return (
    <>
      <Router>
        <Home />
      </Router>
      <div>
        <div className="wrapper">
          <div className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span>
              <i className="fab fa-facebook-f"></i>
            </span>
          </div>
          <div className="icon twitter">
            <div className="tooltip">Twitter</div>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
          </div>
          <div className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
          <div className="icon blog">
            <div className="tooltip">Blog</div>
            <span>
              <i className="fab fa-blogger"></i>
            </span>
          </div>
          <div className="icon youtube">
            <div className="tooltip">Youtube</div>
            <span>
              <i className="fab fa-youtube"></i>
            </span>
          </div>
        </div>
        <Buttonn o={(scrollNav = { scrollNav })}>Free Class</Buttonn>
      </div>
      <Footer />
    </>
  );
}

export default App;
