import React, { useRef, useState, useEffect } from "react";

import {
  CarouselSection,
  CarouselWrapper,
  CarouselSlide,
  CarouselSlider,
  CarouselImage,
  CarouselContent,
  CarouselButtons,
  PrevArrow,
  NextArrow,
  CarouselH1,
  CarouselP,
  CarouselSubWrapper,
} from "./CarrouselElements";

const Carrousel = ({ slides }: { slides: any }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  let timeout: any = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <CarouselSection>
        <CarouselWrapper>
          {slides.map((slide: any, index: any) => {
            return (
              <CarouselSlide key={index}>
                {index === current && (
                  <CarouselSlider>
                    <CarouselImage src={slide.image} />
                    <CarouselContent>
                      <CarouselH1>{slide.title}</CarouselH1>
                      <CarouselP>{slide.subtitle}</CarouselP>
                    </CarouselContent>
                  </CarouselSlider>
                )}
              </CarouselSlide>
            );
          })}
          <CarouselButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </CarouselButtons>
        </CarouselWrapper>
      </CarouselSection>
    </>
  );
};

export default Carrousel;
