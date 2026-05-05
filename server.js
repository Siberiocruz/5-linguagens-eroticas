const express = require('express');
const path = require('path');

const app = express();

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota para servir qualquer arquivo HTML
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.path);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
