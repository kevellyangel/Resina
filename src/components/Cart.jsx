import React from 'react';
import { Button, Typography } from '@mui/material';

const Cart = ({ cartItems, clearCart, removeItemFromCart }) => {
  const phoneNumber = '5511957943031';

  const sendMessage = () => {
    let message = 'Olá, gostaria de fazer um pedido:\n';
    cartItems.forEach(item => {
      message += `- ${item.name} (${item.quantity}x) - R$${item.price}\n`;
    });
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Seu Carrinho</Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Seu carrinho está vazio!</Typography>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - {item.quantity}x - R${item.price}
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={() => removeItemFromCart(item.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Remover
                </Button>
              </li>
            ))}
          </ul>
          <Button variant="contained" color="primary" onClick={sendMessage}>
            Enviar Pedido pelo WhatsApp
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={clearCart} 
            style={{ marginTop: '20px', marginLeft: '15px' }}
          >
            Limpar Carrinho
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
