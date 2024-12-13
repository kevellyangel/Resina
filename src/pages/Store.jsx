import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

const products = [
  { id: 1, name: 'Resina Epóxi', image: 'https://via.placeholder.com/150', price: 'R$ 50,00' },
  { id: 2, name: 'Resina UV', image: 'https://via.placeholder.com/150', price: 'R$ 30,00' },
  { id: 3, name: 'Resina Poliuretano', image: 'https://via.placeholder.com/150', price: 'R$ 70,00' },
];

const Store = ({ addToCart }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Produtos</h3>
      <Grid container spacing={4} justifyContent="center">
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">{product.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)} // Chama a função para adicionar ao carrinho
                >
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Store;
