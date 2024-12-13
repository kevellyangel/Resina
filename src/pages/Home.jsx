import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>Bem-vindo à Loja de Resinas</Typography>
      <Button variant="contained" color="primary" href="/store" style={{ margin: '10px' }}>
        Ver Loja
      </Button>
      <Button variant="outlined" color="secondary" href="/contact" style={{ margin: '10px' }}>
        Contato
      </Button>
    </Container>
  );
};

export default Home;
