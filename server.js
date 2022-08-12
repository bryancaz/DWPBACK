const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const categoriaRoute = require('./app/routes/categoria.route');
const viajeRoute = require('./app/routes/viaje.route');


require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log('Conectados a la base de datos');
  })
  .catch((err) => {
    console.log('Error al conectar a la base de datos', err);
    process.exit();
  });



const corsOptions = {
  "origin": "*",
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));


app.use('/api/v1/categoria', categoriaRoute);
app.use('/api/v1/viaje', viajeRoute);

app.get('/', (req, res) => {
  res.send('<h1 align="center">Bienvenido a la api/h1>');
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Servidor jalando en el puerto ${process.env.PORT || PORT} desde el dia ${new Date()}`);
});