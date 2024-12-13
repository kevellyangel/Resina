import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './components/Cart';
import Contact from './pages/Contact'; // Importando o componente de contato

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} /> {/* Nova rota de contato */}
      </Routes>
    </Router>
  );
};

export default App;
