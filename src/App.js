import './App.css';
import {BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Interior from './Interior';
import Global from './Global';
import Home from './Hero/Home';
import Section from './Section';
import Footer from './Footer/Footer';




function App() {
  return (

    <div className="App">
     <Global/>
      <BrowserRouter>
    
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/interior' element={<Interior/>}/>
        <Route path='/section' element={<Section/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
