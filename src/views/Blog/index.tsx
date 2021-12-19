import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { BlogSection, BlogWrapper } from "./BlogElements";

function Blog() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="blog" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <BlogSection>
        <BlogWrapper></BlogWrapper>
      </BlogSection>
    </>
  );
}

export default Blog;
