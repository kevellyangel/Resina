// src/pages/Cart.jsx
import React, { useState, useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Carregar o carrinho do localStorage quando o componente for montado
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Função para limpar o carrinho
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Função para enviar o pedido via WhatsApp
  const sendOrder = () => {
    const itemsMessage = cart
      .map(item => `Produto: ${item.name} - Preço: ${item.price}`)
      .join('%0A'); // Formata os itens para a URL do WhatsApp

    const message = `Olá, gostaria de comprar os seguintes produtos: %0A${itemsMessage}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511957943031?text=${encodedMessage}`, '_blank');
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>Seu Carrinho</Typography>
      {cart.length === 0 ? (
        <Typography variant="h5" gutterBottom>Seu carrinho está vazio</Typography>
      ) : (
        cart.map((item, index) => (
          <Typography key={index} variant="h6" gutterBottom>
            {item.name} - {item.price}
          </Typography>
        ))
      )}

      {cart.length > 0 && (
        <>
          <Button variant="contained" color="primary" onClick={sendOrder} style={{ margin: '10px' }}>
            Finalizar Pedido pelo WhatsApp
          </Button>
          <Button variant="outlined" color="secondary" onClick={clearCart} style={{ margin: '10px' }}>
            Limpar Carrinho
          </Button>
        </>
      )}
      <Button variant="contained" color="secondary" onClick={() => window.location.href = '/store'} style={{ margin: '10px' }}>
        Voltar à Loja
      </Button>
    </Container>
  );
};

export default Cart;
