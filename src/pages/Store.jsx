import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const products = [
  { id: 1, name: 'Resina Epóxi', image: 'https://via.placeholder.com/150', price: 'R$ 50,00' },
  { id: 2, name: 'Resina UV', image: 'https://via.placeholder.com/150', price: 'R$ 30,00' },
  { id: 3, name: 'Resina Poliuretano', image: 'https://via.placeholder.com/150', price: 'R$ 70,00' },
];

const Store = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
        Nossos Produtos
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
              <Button variant="contained" color="primary" style={{ margin: '10px' }}>
                Adicionar ao Carrinho
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Store;
