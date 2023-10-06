const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); 

app.use(express.json());

app.use(cors());

const templateRoutes = require('./routes/templateRoutes');
const authRoutes = require('./routes/auth');

app.use('/templates', templateRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});