import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';


function CarouselPro() {
  return (
    <div class="container">
  <div class="row">
    <div class="col-1">
      .
    </div>
    <div class="col-10">
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.ibb.co/98Rk7Np/Ilustraci-n-sin-t-tulo.png" alt="Ilustraci-n-sin-t-"
      />
      <Carousel.Caption>
      <h3>.</h3>
        <p>.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.ibb.co/GTrMLHH/siderea1.png"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>.</h3>
        <p>.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.ibb.co/98Rk7Np/Ilustraci-n-sin-t-tulo.png"
        alt="Third slide"
      />

      <Carousel.Caption>
      <h3>.</h3>
        <p>.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
    <div class="col-1">
     .
    </div>
  </div>
  </div>
  );
}

export default CarouselPro;
