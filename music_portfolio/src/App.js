import './App.css';
import Navbar from "./components/Navbar.js";
import ImageSlider from './components/ImageSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Videos from './components/Videos';
import Subscriber from './components/MyForm';
import Footer from './components/Footer';
import Audio from './components/Audio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider />
      <Videos />
      <Audio />
      <Subscriber />

      <Footer />
    </div>
  );
}

export default App;
