import React from 'react';
import './ukrainianbrands.scss';

const UkrainianBrands = () => {
  const images = [
    "img/ae9c02c09b415d23336f58f5ac829e28.png",
    "https://s3-alpha-sig.figma.com/img/494f/15ad/adb02242e9f3095fbdcf0c4150383dc7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NBE-YI-n-cT2U6CTNnsWD745ZQvpIfT7RkS91Eb~pwl2X5Bg2J7CSXgBW8ZjzK9E~z8E~6azVGSNKuVUO38S7y1K6FiinRAnues81iRFkbjv~u-bFb0mDXeMnkPPW0A~oPQplyJFsDuyXDdEjPqebt9ZCXYo-EjIW-FWYYlO98-f-FpHi3bObHS5dusdraemYwoh5hZOAVM8J7TirA7n9MxYzoZStg2X5BtIzUz-oASP7Yn-eeTE3awmc1OPNpKSSUAEjkLHvGmKZ9bsreZ0jfRpMJf-4smBPLOSnC7dy-qHTBAZ1womBEITe~1JKiUXm3dcoqALFhlaJGC3bBlapA__",
    "https://s3-alpha-sig.figma.com/img/065a/7ede/47757800f9feb6243e93c347d56c81e2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjbKANY8Q73DzZrtVremHawF72egNI3PPFK~bJ54LrM7YPC2ZkMr32NRP1BIt4i9ZBYLUrAzFz1xDcfYg2fj6ONX-LS18z7bwbJHkJ5jmlY2xLD9kbQ95Ov4o2XOo2xEl~X~HlFZfzRp7zJoy2YjyKtBwEtu2x6DKCGKA4MuUGmqpc2UDZmWarYXFSX61yyAMqOCNi-Cwzcf4ZyNsIiUznZojFLc39mcexBXaFNxTFCI~5TOafMzizqzJWTI4~nuYGczGduc071MQAnP6TocrrnmfD6X7ISeAvXv73tuGimGwDet3OORHfEQ8BRhBnUQY1VnJIOysYhvPfdKWH6AdQ__",
    "img/image 59.png",
    "img/image 45.png",
    "img/image 44.png",
  ];

  const moveSlide = (carouselId, direction) => {
    const carousel = document.getElementById(carouselId);
    if (direction === 'prev') {
      carousel.appendChild(carousel.firstElementChild);
    } else {
      carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
    }
  };

  return (
    <div className="carousel-section">
      <div className="carousel-header">
        <h2 className='carousel-section-logo'>Ukrainian Brands</h2>
        <a href="#" className="shop-now">
          Shop now
          <svg
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
        </a>
      </div>
      <div className="line"></div>
      <div className="carousel-wrapper">
        <button
          className="carousel-btn left"
          onClick={() => moveSlide('ukrainian-carousel', 'prev')}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="#CDD4DA" />
            <path
              d="M31.667 16.8517L21.8486 26.7472C21.5191 27.0794 21.334 27.5299 21.334 27.9997C21.334 28.4694 21.5191 28.9199 21.8486 29.2521L31.667 39.1477C31.9128 39.3953 32.2259 39.564 32.5668 39.6323C32.9077 39.7006 33.2611 39.6656 33.5822 39.5315C33.9034 39.3975 34.1778 39.1705 34.371 38.8792C34.5641 38.588 34.6672 38.2455 34.6673 37.8952V18.1041C34.6672 17.7538 34.5641 17.4114 34.371 17.1201C34.1778 16.8289 33.9034 16.6019 33.5822 16.4678C33.2611 16.3338 32.9077 16.2987 32.5668 16.367C32.2259 16.4353 31.9128 16.604 31.667 16.8517Z"
              fill="#1F487E"
            />
          </svg>
        </button>
        <div className="carousel" id="ukrainian-carousel">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Brand ${index + 1}`} />
          ))}
        </div>
        <button
          className="carousel-btn right"
          onClick={() => moveSlide('ukrainian-carousel', 'next')}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="#CDD4DA" />
            <path
              d="M24.3343 39.1477L34.1527 29.2521C34.4822 28.9199 34.6673 28.4694 34.6673 27.9997C34.6673 27.5299 34.4822 27.0794 34.1527 26.7472L24.3343 16.8517C24.0885 16.604 23.7754 16.4353 23.4345 16.367C23.0936 16.2987 22.7402 16.3338 22.4191 16.4678C22.0979 16.6019 21.8235 16.8289 21.6303 17.1201C21.4372 17.4114 21.3341 17.7538 21.334 18.1041V37.8952C21.3341 38.2455 21.4372 38.588 21.6303 38.8792C21.8235 39.1705 22.0979 39.3975 22.4191 39.5315C22.7402 39.6656 23.0936 39.7006 23.4345 39.6323C23.7754 39.564 24.0885 39.3953 24.3343 39.1477Z"
              fill="#1F487E"
            />
          </svg>
        </button>
      </div>
      <div className="banner">
        <img src="img/Frame 4075622 (1).png" alt="Christmas Sale Banner" />
      </div>
    </div>
  );
};

export default UkrainianBrands;
