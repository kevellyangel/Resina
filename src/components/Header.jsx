// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#6a5acd', padding: '10px', color: 'white' }}>
      <h1>Loja de Resina</h1>
      <nav>
        <Link to="/" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
        <Link to="/store" style={{ marginRight: '15px', color: 'white' }}>Loja</Link>
        <Link to="/cart" style={{ color: 'white' }}>Carrinho</Link>
      </nav>
    </header>
  );
};

export default Header;
