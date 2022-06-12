import './App.css';
import Navbar from "./components/Navbar.js";
import ImageSlider from './components/ImageSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Videos from './components/Videos';
import Subscriber from './components/MyForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider />
      <Videos />
      <Subscriber />
    </div>
  );
}

export default App;
