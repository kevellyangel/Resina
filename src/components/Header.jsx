// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Importando o ícone do WhatsApp

const Header = () => {
  const phoneNumber = '5511957943031';

  const sendMessage = () => {
    const message = 'Olá, gostaria de mais informações.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <header style={{ backgroundColor: '#6a5acd', color: 'white', padding: '10px' }}>
      <h1>Loja de Resina</h1>
      <nav>
        <Link to="/" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
        <Link to="/store" style={{ marginRight: '15px', color: 'white' }}>Loja</Link>
        <Link to="/cart" style={{ marginRight: '15px', color: 'white' }}>Carrinho</Link>
        <Button
          variant="contained"
          color="success"
          onClick={sendMessage}
          style={{ marginLeft: '15px', backgroundColor: '#25d366' }}
        >
          <WhatsAppIcon style={{ marginRight: '8px' }} />
          WhatsApp
        </Button>
      </nav>
    </header>
  );
};

export default Header;
