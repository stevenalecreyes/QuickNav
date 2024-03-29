import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
