import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/About";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./views/Home";

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let xx = document.getElementById("header")!.style.backgroundColor;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    xx = "white";
  } else {
    xx = "gray";
  }
}

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>

      <body>
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
        <button className="al">Free Class</button>
      </body>
    </>
  );
}

export default App;
