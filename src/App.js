import Header from  './components/header/Header';
import CarouselSection from './components/favorite brands/CarouselSection';
import UaBrands from './components/ukrainian brands/UaBrands'; 
import Banner from './components/banner/ControlledCarousel';
import Recommendations from './components/recommendations/Recommendations';
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CarouselSection/>
      <UaBrands />
      <Recommendations/>
      <Footer/>
    </div>
  );
}

export default App;
