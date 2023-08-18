const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8001;
const cors = require('cors');
app.use(express.json());
app.use(cors());
require('./source/database/db');

const users = require('./source/routes/users');
const uploads = require('./source/routes/uploads');
const edificio = require('./source/routes/edificio');

app.use('/users', users);
app.use('/edificio', edificio);
app.use('/uploads', uploads);

const options = {
  key: fs.readFileSync('/home/serpaadministrador.com.ar/ssl.key'),
  cert: fs.readFileSync('/home/serpaadministrador.com.ar/ssl.cert')
};

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Estamos trabajando en el puerto ${port} en modo seguro HTTPS`);
});