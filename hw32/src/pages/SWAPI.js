import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const SWAPI = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Star Wars:</Typography>
      <List>
        {characters.map((char, index) => (
          <ListItem key={index}>
            <ListItemText primary={char.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SWAPI;
