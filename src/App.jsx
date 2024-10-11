import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Portfolio  from './components/Portfolio/Portfolio';
import Contact  from './components/Contact/Contact';
import Footer  from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
