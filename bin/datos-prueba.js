db = connect("localhost/Pedime")

db.restaurantes.insert({
  "nombre": "El Quincho de Chiquito",
  "direccion": "Obispo Principe 050",
  "platos": [{
    "nombre": "Bondiola de Cerdo Glaceada",
    "descripcion": "Con batatas acarameladas y salsa dulce",
    "precio": 225.00
  },{
    "nombre": "Lomo a la Pimienta",
    "descripcion": "Con papas a la crema y pimienta",
    "precio": 230.00
  },{
    "nombre": "Saltimboca a la Romana",
    "descripcion": "Emince de lomo con brochette de jamón y morrón, en salsa demiglace y papas noisette",
    "precio": 355.00
  }]
});
db.restaurantes.insert({
  "nombre": "Chopería Santa Fe",
  "direccion": "San Jerónimo 3498",
  "platos": [{
    "nombre": "Milanesa de Ternera Napolitana",
    "descripcion": "",
    "precio": 155.00
  },{
    "nombre": "Pechuguitas al Verdeo",
    "descripcion": "Con papas noisette a la crema",
    "precio": 185.00
  }]
});