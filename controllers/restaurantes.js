module.exports.getRestaurante = function(req, res) {
  console.log('GET /restaurantes/', req.params);
};
module.exports.postPedido = function(req, res) {
  console.log('POST /restaurantes/', req.body);
};