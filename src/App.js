import './App.css';
import About from './Components/About/About';
import Floater from './Components/Floater/Floater';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='container'>


      <div className='up_background'>
        <Navbar />
        <Floater/>
        <Header />
        <About/>
      </div>


    </div>
  );
}

export default App;
