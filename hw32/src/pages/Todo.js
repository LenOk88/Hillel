import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';


const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <Container>
      <Typography variant="h4">TODO</Typography>
      <TextField
        label="Новая задача"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button class ="my-custom-button" onClick={addTask}>Add</Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Todo;
