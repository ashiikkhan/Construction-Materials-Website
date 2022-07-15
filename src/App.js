import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import OurTeam from './components/OurTeam/OurTeam';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='ourteam' element={<OurTeam></OurTeam>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
