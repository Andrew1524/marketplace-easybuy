import Header from  './components/header/Header';
import Slider from './components/banner/Slider';
import Recommendations from './components/recommendations/Recommendations';
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Recommendations/>
      <Footer/>
    </div>
  );
}

export default App;
