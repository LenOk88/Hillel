const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb+srv://shevchesp70:G2jyUbvI4D9GW9ZU@cluster0.h3gbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')));

app.use('/api', todoRoutes);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('Database connection error:', error));
