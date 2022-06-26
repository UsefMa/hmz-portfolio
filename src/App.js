
import About from './about/About';
import './App.css';
import Contact from './contact/Contact';
import Home from './Home/Home';
import Navbar from './nav/Navbar';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
     
    </div>
  );
}

export default App;
