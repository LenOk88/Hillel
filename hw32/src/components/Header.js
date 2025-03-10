import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Мой сайт</Typography>
        <Button color="inherit" component={Link} to="/">Главная</Button>
        <Button color="inherit" component={Link} to="/todo">TODO</Button>
        <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
