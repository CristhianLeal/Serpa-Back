const express = require('express');
const router = express.Router();
const { crearEdificio, getEdificio, deleteEdificio, patchEdificio, getEdificioEspecifico, getEdificioName, updateEdif } = require('../controllers/edificio');

router.get('/get-edificio', getEdificio);
router.get('/:id', getEdificioEspecifico);
router.get('/getEdificioName/:name', getEdificioName);
router.post('/crear-edificio', crearEdificio);
router.delete('/delete-edificio', deleteEdificio);
router.patch('/patch-edificio', patchEdificio);
router.patch('/updateEdif/:id', updateEdif);

module.exports = router;