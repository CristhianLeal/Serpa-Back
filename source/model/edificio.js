const { Schema, model } = require('mongoose');

const edificio = new Schema({
    name: String,
    dateExpensa: String,
})

module.exports = model (`Edificio`, edificio)