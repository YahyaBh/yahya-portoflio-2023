import './App.css';
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
      </div>


    </div>
  );
}

export default App;
