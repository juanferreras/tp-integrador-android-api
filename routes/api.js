var express = require('express');
var router = express.Router();
var ctrlRestaurantes = require('../controllers/restaurantes')

/* GET menú */
router.get('/restaurantes/:restauranteId', ctrlRestaurantes.getRestaurante);

/* POST pedido */
router.post('/restaurantes/:restauranteId', ctrlRestaurantes.postPedido);

module.exports = router;
