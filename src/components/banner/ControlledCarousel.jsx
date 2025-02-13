import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.scss';
import banner from '../../resourses/img/banner.jpg'
// import { Carousel.Caption, Carousel.Item } from 'react-bootstrap';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section>
      <div className="container"
      style={{"padding": "0"}}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
        className='d-block w-100'
        src={banner} 
        alt="lady" />
        <Carousel.Caption>
          <div className="text-up">
            <div className="text-up tittle">
              <h3>Big Holiday Sale</h3>
            </div>
            <div className="text-up sale">
              <p>Up to -50%</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={banner} 
        alt="lady" />
        <Carousel.Caption>
        <div className="text-up">
            <div className="text-up tittle">
              <h3>Big Holiday Sale</h3>
            </div>
            <div className="text-up sale">
              <p>Up to -50%</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={banner} 
        alt="lady" />
        <Carousel.Caption>
        <div className="text-up">
            <div className="text-up tittle">
              <h3>Big Holiday Sale</h3>
            </div>
            <div className="text-up sale">
              <p>Up to -50%</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={banner} 
        alt="lady" />
        <Carousel.Caption>
        <div className="text-up">
            <div className="text-up tittle">
              <h3>Big Holiday Sale</h3>
            </div>
            <div className="text-up sale">
              <p>Up to -50%</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </section>
    
  );
}

export default ControlledCarousel;