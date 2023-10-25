require('dotenv').config({ path: './.env' });
console.log('Valor de JWT_SECRET:', process.env.JWT_SECRET);
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors'); 

app.use(express.json());

app.use(cors());

const templateRoutes = require('./routes/templateRoutes');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');


app.use('/templates', templateRoutes);
app.use('/usuario', userRoutes);
app.use('/login', loginRoutes);

// Middleware para lidar com erros 404 (Não encontrado)
app.use((req, res, next) => {
  const err = new Error('Não encontrado');
  err.status = 404;
  next(err);
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});