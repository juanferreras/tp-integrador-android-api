var mongoose = require('mongoose');
var Restaurante = mongoose.model('Restaurante');

var sendJSON = function(res, status, content) {
  res.status(status);
  res.json(content);
};

// GET información de Restaurante con id restauranteId
module.exports.getRestaurante = function(req, res) {
  if (req.params && req.params.restauranteId) {
    Restaurante
      .findById(req.params.restauranteId.toString())
      .exec(function(err, restaurante) {
        if (!restaurante) {
          // no se encuentra un restaurante con ese id
          sendJSON(res, 404, {
            "message": "No se ha encontrado el Restaurante con ese id."
          });
          return;
        } else if (err) {
          sendJSON(res, 404, err);
          return;
        }
        // se encontró el restaurante buscado
        sendJSON(res, 200, restaurante);
      });
  } else {
    // la request no traía un id
    sendJSON(res, 404, {
      "message": "No se encuentra el id del Restaurante en la request"
    });
  }
};