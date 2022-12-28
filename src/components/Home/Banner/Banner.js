import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item className="slider">
              <img
                className="d-block w-100 h-50vh"
                src={banner1}
                alt="First slide"
              />
              <Carousel.Caption className="slider-text">
                <h1>The Best Hosptal  and Doctors</h1>
                <p>We Are Always Ready To Gives You Best Treatment.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className="slider">
              <img
                className="d-block w-100  h-50vh"
                src={banner2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h1>Best Treatment and Happy Life</h1>
                <p>We Are Always Ready To Gives You Best Treatment.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className="slider">
              <img
                className="d-block w-100  h-50vh"
                src={banner3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1>Healthy Tablates and Medicine</h1>
                <p>We Are Always Ready To Gives You Best Treatment.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            
        </>
    );
};

export default Banner;