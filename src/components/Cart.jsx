// src/components/Cart.jsx
import React from 'react';

const Cart = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Carrinho</h2>
      <p>Seu carrinho está vazio!</p>
      <button style={{ backgroundColor: '#6a5acd', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
        Voltar à loja
      </button>
    </div>
  );
};

export default Cart;
