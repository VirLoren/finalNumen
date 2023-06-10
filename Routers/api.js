const express = require ('express');
const router = express.Router();
const apiController = require('../Controllers/apiController');
const {validarID} = require ('../middleware/validarID.js');
const checks = require ('../middleware/checks.js');
const {validarChecks} = require ('../middleware/validarChecks.js');


router.get('/ver',apiController.list);
router.get('/buscar/id/:id',validarID,apiController.buscarSegunId);
router.get('/list-farmaco/farmaco/:farmaco',apiController.listaPorFarmaco);
router.get('/list-comercial/nombreComercial/:nombreComercial',apiController.listaPorComercial);
router.post('/crear',checks,validarChecks, apiController.crear);
router.put('/editar/id/:id',validarID,apiController.editar);
router.delete('/eliminar/id/:id',validarID,apiController.eliminar);



module.exports = router