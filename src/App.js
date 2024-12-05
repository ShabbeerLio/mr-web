import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navebar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
