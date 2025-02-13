import React from 'react';
import Banner from './banner/ControlledCarousel';
import CarouselSection from './Favorite Brands/CarouselSection';
import Recommendations from './recommendations/Recommendations';
import UaBrands from './Ukrainian Brands/UaBrands';

import './Catalogue.scss';

const Catalogue = () => {
    return ( <div className="catalogue-container">
      <Banner/>
      <CarouselSection/>
      <UaBrands />
      <Recommendations/>
    </div> );
}
 
export default Catalogue;