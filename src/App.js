import './App.css';
import About from './Components/About/About';
import Floater from './Components/Floater/Floater';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Clients from './Components/Clients/Clients';
import Hire from './Components/Hire/Hire';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className='container'>


      <div className='up_background'>
        <Navbar />
        <Floater />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Clients />
        <Hire />
        <Footer/>
      </div>


    </div>
  );
}

export default App;
