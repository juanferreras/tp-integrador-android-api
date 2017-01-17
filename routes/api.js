var express = require('express');
var router = express.Router();
var ctrlRestaurantes = require('../controllers/restaurantes')
var ctrlPedidos = require('../controllers/pedidos')

/* GET menú */
router.get('/restaurantes/:restauranteId', ctrlRestaurantes.getRestaurante);

/* POST pedido */
router.post('/restaurantes/:restauranteId/pedidos', ctrlPedidos.postPedido);

module.exports = router;
