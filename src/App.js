import Header from  './components/header/Header';
import CarouselSection from './components/Favorite Brands/Favorite Brands'
import UkrainianBrands from './components/Ukrainian Brands/Ukrainian Brands'; 



const App = () => {
  return (
    <div className="App">
      <Header/>
      <CarouselSection/>
      <UkrainianBrands />

    </div>
  );
}

export default App;
