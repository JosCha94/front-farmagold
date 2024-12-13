import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Cabecera";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Suppliers from "./pages/Suppliers/Suppliers";
import Farmacovigilancia from "./pages/Farmacovigilancia/Farmacovigilancia";
import Comprar from "./pages/Comprar/Comprar";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <section>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/proveedores" element={<Suppliers />} />
        <Route path="/farmacovigilancia" element={<Farmacovigilancia />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </section>
  );
}

export default App;
