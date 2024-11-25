import { 
	BrowserRouter as Router, 
	Routes, 
	Route,
	Navigate } from 'react-router-dom'
import Navbar from "./layout/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import "./styles.css";
import Rostro from "./components/Rostro";
import Ojos from "./components/Ojos";
import Labios from "./components/Labios";
import Register from './components/Register';
import CejasPestanas from './components/CejasPestanas';
import DetalleProducto from './pages/DetalleProducto';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categoria/rostro" element={<Rostro />} />
          <Route path="/categoria/ojos" element={<Ojos />} />
          <Route path="/categoria/labios" element={<Labios />} />
          <Route path="/categoria/cejas-pestanas" element={<CejasPestanas />} />
          <Route path="/product/:id" element={<DetalleProducto />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
