import React, { useState } from 'react';
import './favoritebrands.scss';

const CarouselSection = () => {
  const images = [
    "img/zara-logo-1 1.png",
    "img/levis-1 1.png",
    "img/zara-logo-1 1.png",
    "img/levis-1 1.png",
    "img/zara-logo-1 1.png",
    "img/tommy-hilfiger-3 1.png"
  ];

  const prevSlide = (carouselId) => {
    const carousel = document.getElementById(carouselId);
    carousel.appendChild(carousel.firstElementChild); // Переміщуємо перший елемент в кінець
  };

  const nextSlide = (carouselId) => {
    const carousel = document.getElementById(carouselId);
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild); // Переміщуємо останній елемент на початок
  };

  const handleShopNowClick = () => {
    console.log('Redirect to Shop Now');
  };

  return (
    <div className="carousel-section">
      <div className="carousel-header">
        <h2 className="carousel-section-logo">Favorite Brands</h2>
        <button className="shop-now" onClick={handleShopNowClick}>
          Shop now
          <svg
            className="carousel-section-svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6683 7.66217L10 7.66216C8.34315 7.66215 7 9.0053 7 10.6622L7 21.9997C7 23.6566 8.34315 24.9997 10 24.9997L21.3376 24.9997C22.9944 24.9997 24.3376 23.6566 24.3376 21.9997V18.3314M14.3351 17.6646L24.3376 7.66215M19.0029 7.66211L24.3375 7.67188L24.3375 12.9967"
              stroke="#1F487E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="line"></div>
      <div className="carousel-wrapper">
        <button
          className="carousel-btn left"
          onClick={() => prevSlide('carousel')}
        >
          <svg
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="28.5" cy="28" rx="28.5" ry="28" fill="#FFF5EE" />
            <path
              d="M32.2323 16.8517L22.2387 26.7472C21.9033 27.0794 21.7148 27.5299 21.7148 27.9997C21.7148 28.4694 21.9033 28.9199 22.2387 29.2521L32.2323 39.1477C32.4826 39.3953 32.8013 39.564 33.1483 39.6323C33.4953 39.7006 33.8549 39.6656 34.1818 39.5315C34.5087 39.3975 34.7881 39.1705 34.9846 38.8792C35.1812 38.588 35.2862 38.2455 35.2863 37.8952V18.1041C35.2862 17.7538 35.1812 17.4114 34.9846 17.1201C34.7881 16.8289 34.5087 16.6019 34.1818 16.4678C33.8549 16.3338 33.4953 16.2987 33.1483 16.367C32.8013 16.4353 32.4826 16.604 32.2323 16.8517Z"
              fill="#1F487E"
            />
          </svg>
        </button>

        <div id="carousel" className="carousel">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Brand ${index + 1}`} />
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={() => nextSlide('carousel')}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="#FFF5EE" />
            <path
              d="M24.3343 39.1477L34.1527 29.2521C34.4822 28.9199 34.6673 28.4694 34.6673 27.9997C34.6673 27.5299 34.4822 27.0794 34.1527 26.7472L24.3343 16.8517C24.0885 16.604 23.7754 16.4353 23.4345 16.367C23.0936 16.2987 22.7402 16.3338 22.4191 16.4678C22.0979 16.6019 21.8235 16.8289 21.6303 17.1201C21.4372 17.4114 21.3341 17.7538 21.334 18.1041V37.8952C21.3341 38.2455 21.4372 38.588 21.6303 38.8792C21.8235 39.1705 22.0979 39.3975 22.4191 39.5315C22.7402 39.6656 23.0936 39.7006 23.4345 39.6323C23.7754 39.564 24.0885 39.3953 24.3343 39.1477Z"
              fill="#1F487E"
            />
          </svg>
        </button>
      </div>
      <div className="banner">
        <img src="img/Frame 4075620 (1).png" alt="Sale Banner" />
      </div>
    </div>
  );
};

export default CarouselSection;
