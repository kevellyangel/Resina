// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ name, price, image }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', margin: '10px' }}>
      <img src={image} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{name}</h3>
      <p>Preço: R${price}</p>
      <button style={{ backgroundColor: '#6a5acd', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;
