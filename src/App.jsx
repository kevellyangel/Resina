import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Header from './components/Header'; // Importando o Header
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar produto ao carrinho
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Função para limpar o carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  // Função para remover um item do carrinho
  const removeItemFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store addToCart={addToCart} />} />
        <Route 
          path="/cart" 
          element={<Cart 
            cartItems={cartItems} 
            clearCart={clearCart} 
            removeItemFromCart={removeItemFromCart} 
          />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
