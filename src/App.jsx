import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;