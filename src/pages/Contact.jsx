import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Função para capturar mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    alert('Mensagem enviada com sucesso! 📬');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>Entre em Contato</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="E-mail"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Mensagem"
          name="message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          Enviar
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
