// src/pages/Store.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const products = [
  { id: 1, name: 'Resina Epóxi', price: 50, image: '/images/resina1.jpg' },
  { id: 2, name: 'Resina UV', price: 30, image: '/images/resina2.jpg' },
];

const Store = () => {
  return (
    <div>
      <Header />
      <h2>Loja de Resinas</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
