import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//import './App.css';
import Header from "./components/layout/Header";
import Navegacion from "./components/layout/Navegacion";
import Proyectos from "./components/sections/Proyectos";
import Nosotros from "./components/sections/Nosotros";
import BotonesWF from "./components/contacto-btn/BotonesWF";
import Footer from "./components/layout/Footer";
import Carrousel from "./components/sections/Carrousel";
import Contacto from "./components/sections/Contacto";

function App() {
  return (
    <Fragment>
      <Navegacion />
      <Header />
      <Nosotros />
      <Carrousel />
      <Proyectos />

      <BotonesWF />
      <Contacto />
      <Footer />
    </Fragment>
  );
}

export default App;
