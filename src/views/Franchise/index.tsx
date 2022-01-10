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
              <div className="num">01</div>
              <a
                className="card"
                href="https://codetheweb.blog/2017/10/06/html-syntax/"
              >
                <div>
                  <h1>HTML Syntax</h1>
                  <p>
                    The syntax of a language is how it works. How to actually
                    write it. Learn HTML syntax…
                  </p>
                  <div className="date">6 Oct 2017</div>
                  <div className="tags">
                    <div className="tag">HTML</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="card-grid-space">
              <div className="num">02</div>
              <a
                className="card"
                href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
              >
                <div>
                  <h1>Basic types of HTML tags</h1>
                  <p>Learn about some of the most common HTML tags…</p>
                  <div className="date">9 Oct 2017</div>
                  <div className="tags">
                    <div className="tag">HTML</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="card-grid-space">
              <div className="num">03</div>
              <a
                className="card"
                href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
              >
                <div>
                  <h1>Links, images and about file paths</h1>
                  <p>
                    Learn how to use links and images along with file paths…
                  </p>
                  <div className="date">14 Oct 2017</div>
                  <div className="tags">
                    <div className="tag">HTML</div>
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
