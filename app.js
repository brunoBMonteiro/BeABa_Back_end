const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const TemplateController = require('./controllers/templateController.js');


app.get('/templates', TemplateController.listarTemplates);
app.post('/templates', TemplateController.cadastrarTemplate);
// Não esquecer de Definir as demais rotas aqui.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
