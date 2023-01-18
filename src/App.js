import NavBar from "./complements/NavBar";
import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from "./views/Carrito";
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import {PizzasProvider} from './Context'
function App() {
  return (
    <PizzasProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/pizza/:id' element={<Pizza />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </PizzasProvider>
  );
}
export default App;
