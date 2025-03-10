import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px', background: '#f1f1f1' }}>
      <Typography variant="body1">Контакты: example@example.com</Typography>
    </Box>
  );
};

export default Footer;
