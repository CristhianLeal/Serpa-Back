const Edificio = require('../model/edificio');
const mongoose = require('mongoose');
require('dotenv').config();

const getEdificio = async (req, res) => {
    try {
        const edificios = await Edificio.find({})
        res.status(200).send(edificios);
    } catch (error) {
        res.status(206).json({ error: error.message });
    }
}

const getEdificioEspecifico = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(206).send('Invalid ID');
    }
    try {
        const edificio = await Edificio.findById(id);
        res.status(200).send(edificio);
    } catch (error) {
        res.status(206).json({ error: error.message });
    }
}

const getEdificioName = async (req, res) => {
    const { name } = req.params
    try {
      const edificio = await Edificio.findOne({ name: name })
      if (!edificio) {
        return res.status(404).send('Edificio not found')
      }
      res.status(200).send(edificio)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
}

const crearEdificio = async (req, res) => {
    const { name } = req.body;
    const edificioExiste = await Edificio.findOne({"name": name})
    if (edificioExiste) {
        res.status(206).send(`Este edificio ya existe.`)
    } else {
        const nuevoEdificio = new Edificio({
            name
        })
        await nuevoEdificio.save()
        res.status(200).send(`Se creo el edificio con éxito.`)
    }
}

const deleteEdificio = async (req, res) => {
    const { name } = req.body
    if (name) {
        await Edificio.findOneAndDelete({ name });
        res.status(200).send(`Se elimino el edificio con éxito.`)
    } else{
        res.status(206).send(`No id.`)
    }
}

const patchEdificio = async (req, res) => {
    const { name, id } = req.body
    await Edificio.findByIdAndUpdate(id, {
        name
    })
    res.status(200).send(`Se actualizo el edificio con éxito.`)
};

const updateEdif = async (req, res) => {
    const { id, tipo } = req.body
    if(id){
    const date = new Date();
    if (tipo === "expensa"){
      await Edificio.findByIdAndUpdate(id, {
        dateExpensa: date.toLocaleDateString('es-ES'),
      })
      res.status(200).send(`Se actualizo la fecha con éxito.`)
    }} else{
    res.status(206).send(`No id.`)
    }
  };

module.exports = { crearEdificio, getEdificio, deleteEdificio, patchEdificio, getEdificioEspecifico, getEdificioName,updateEdif }