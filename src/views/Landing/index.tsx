import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { LandingSection, LandingWrapper } from "./LandingElements";
import "./index.scss";
function Landing() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="franchise" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <LandingSection>
        <LandingWrapper>
          <dl>
            <dt>0</dt>
            <dd>Start on top and around you go. That's how you make a zero!</dd>
            <dt>1</dt>
            <dd>
              Go straight down and then you're done. That's the way to make a
              one.
            </dd>
            <dt>2</dt>
            <dd>
              Make a candy cane and then a shoe. That's the way to make a two!
            </dd>
            <dt>3</dt>
            <dd>
              Around a tree. Around a tree. That's the way to make a three!
            </dd>
            <dt>4</dt>
            <dd>
              Down, across, and down some more. That is how you make a four!
            </dd>
            <dt>5</dt>
            <dd>
              Take a drive. Swim around. To make a five come back to the ground.
            </dd>
            <dt>6</dt>
            <dd>
              Slide down and around to pick up sticks. That is the way to make a
              six.
            </dd>
            <dt>7</dt>
            <dd>
              Straight across and down from heaven. That is how you make a
              seven!
            </dd>
            <dt>8</dt>
            <dd>
              Make an S but don't just wait. Come back up to make an eight!
            </dd>
            <dt>9</dt>
            <dd>Make a loop and then a line. That's the way to make a nine!</dd>
          </dl>
        </LandingWrapper>
      </LandingSection>
    </>
  );
}

export default Landing;
