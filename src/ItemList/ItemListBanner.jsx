import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const ItemListBanner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_615504-MLA49983701494_052022-OO.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_803667-MLA49922986745_052022-OO.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_677041-MLA49983670801_052022-OO.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_736800-MLA49913051466_052022-OO.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_806755-MLA49935397251_052022-OO.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
