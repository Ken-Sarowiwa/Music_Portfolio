import './App.css';
import Navbar from "./components/Navbar.js";
import ImageSlider from './components/ImageSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Videos from './components/Videos';
import { Carousel } from 'bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider />
      <Videos />
    </div>
  );
}

export default App;
