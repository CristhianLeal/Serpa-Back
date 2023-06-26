const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
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

app.listen(port, () =>  {
    console.log(`Estamos trabajando en el puerto ${port}`);
});