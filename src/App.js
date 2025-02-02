import Header from  './components/header/Header';
import CarouselSection from './components/favorite brands/CarouselSection';
import UaBrands from './components/ukrainian brands/UaBrands'; 
import Slider from './components/banner/Slider';
import Recommendations from './components/recommendations/Recommendations';
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <CarouselSection/>
      <UaBrands />
      <Recommendations/>
      <Footer/>
    </div>
  );
}

export default App;
