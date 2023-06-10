const express = require ('express');
const app = express();
const logger = require ('morgan');
const cors = require ('cors');
const axios = require ('axios');

app.use (express.json());
app.use (logger('dev'));
app.use (cors());

const indexRouter = require ('./Routers/index');
const apiRouter = require ('./Routers/api');
const {connect} = require ('./db/db');

app.use ('/', indexRouter);
app.use ('/api', apiRouter);
connect ();

app.get('/externa', (req, res) => {
    const apiUrl = 'https://servicios.pami.org.ar/vademecum/views/consultaPublica/listado.zul';
axios.get(apiUrl)
.then(response => {
  res.json(response.data);
})
.catch(error => {
  
  console.error(error);
  res.status(500).json({ error: 'Error en la solicitud a la API externa' });
});
});


module.exports = app




