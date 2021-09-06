import './App.css';
import './MainGrid/MainGrid.css';
import Hero from './MainContent/Hero/Hero';
import VRSection from './MainContent/VRSection/VRSection';
import Creations from './MainContent/Creations/Creations';
import Footer from './MainContent/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Hero />
        <VRSection />
        <Creations />
        <Footer />
    </div>
  );
}

export default App;
