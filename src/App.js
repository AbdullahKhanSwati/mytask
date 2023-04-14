
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Contact from './Components/Contact';
import Coupen from './Components/Coupen';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Header from './Components/Static/Header';
import Footer from './Components/Static/Footer';
function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>

  <Route  path="/" element={<Home  />} />
  <Route  path="Contact" element={<Contact  />} />
  <Route  path="Coupen" element={<Coupen  />} />
  <Route  path="Menu" element={<Menu  />} />


  </Routes>
  <Footer />
  </BrowserRouter>
  );
}

export default App;
