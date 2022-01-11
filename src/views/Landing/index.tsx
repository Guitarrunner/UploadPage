import React, { useRef, useEffect, useState } from "react";
import {
  CarouselImage,
  CarouselSlide,
  CarouselSlider,
  Img1,
  LandingSection,
  LandingWrapper,
} from "./LandingElements";
import "./index.scss";
import icon from "./sharingan.svg";
import icon2 from "./test1.svg";
import icon3 from "./test2.svg";
import icon5 from "./test4.svg";
import icon4 from "./test3.svg";
import base1 from "./lama.jpg";
import base2 from "./minecraft.jpg";
import base3 from "./robot1.svg";
import base4 from "./robot2.svg";
function Landing() {
  let slides = [
    { image: icon2 },
    { image: icon3 },
    { image: icon4 },
    { image: icon5 },
  ];
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  let timeout: any = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 4150);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <LandingSection>
        <LandingWrapper>
          {slides.map((slide: any, index: any) => {
            return (
              <CarouselSlide key={index}>
                {index === current && (
                  <CarouselSlider>
                    <CarouselImage src={slide.image} />
                  </CarouselSlider>
                )}
                <dl className="dl2">
                  <dt className="dt2">
                    <Img1 src={icon} />
                  </dt>
                  <dd className="dd2">
                    Start on top and around you go. That's how you make a zero!
                  </dd>
                  <dt className="dt2">
                    <Img1 src={base1} />
                  </dt>
                  <dd className="dd2">
                    Go straight down and then you're done. That's the way to
                    make a one.
                  </dd>
                  <dt className="dt2">
                    <Img1 src={base2} />
                  </dt>
                  <dd className="dd2">
                    Make a candy cane and then a shoe. That's the way to make a
                    two!
                  </dd>
                  <dt className="dt2">
                    <Img1 src={base3} />
                  </dt>
                  <dd className="dd2">
                    Around a tree. Around a tree. That's the way to make a
                    three!
                  </dd>
                  <dt className="dt2">
                    <Img1 src={base4} />
                  </dt>
                  <dd className="dd2">
                    Down, across, and down some more. That is how you make a
                    four!
                  </dd>
                  <dt className="dt2">
                    <Img1 src={icon} />
                  </dt>
                  <dd className="dd2">
                    Take a drive. Swim around. To make a five come back to the
                    ground.
                  </dd>
                  <dt className="dt2">
                    <Img1 src={base1} />
                  </dt>
                  <dd className="dd2">
                    Slide down and around to pick up sticks. That is the way to
                    make a six.
                  </dd>
                  <dt className="dt2">
                    <Img1 src={base2} />
                  </dt>
                  <dd className="dd2">
                    Straight across and down from heaven. That is how you make a
                    seven!
                  </dd>
                  <dt className="dt2">
                    <Img1 src={base3} />
                  </dt>
                  <dd className="dd2">
                    Make an S but don't just wait. Come back up to make an
                    eight!
                  </dd>
                  <dt className="dt2">
                    <Img1 src={base4} />
                  </dt>
                  <dd className="dd2">
                    Make a loop and then a line. That's the way to make a nine!
                  </dd>
                </dl>
              </CarouselSlide>
            );
          })}
        </LandingWrapper>
      </LandingSection>
    </>
  );
}

export default Landing;
