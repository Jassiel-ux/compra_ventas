const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importar rutas
const usuarios = require('./routes/usuarios');
const productos = require('./routes/productos');
const compras = require('./routes/compras');
const ventas = require('./routes/ventas');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Usar rutas
app.use('/usuarios', usuarios);
app.use('/productos', productos);
app.use('/compras', compras);
app.use('/ventas', ventas);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
