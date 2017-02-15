db = connect("localhost/Pedime")

db.restaurantes.insert({
  "nombre": "Mc Donalds",
  "direccion": "San Martín 2702",
  "platos": [{
    "nombre": "Cuarto de libra con queso",
    "descripcion": "Doble queso derretido. La compañia perfecta.",
    "foto": "/images/cuarto-de-libra-con-queso.png",
    "precio": 90.00
  },{
    "nombre": "Doble cuarto de libra con queso",
    "descripcion": "Un cuarto de libra de pura carne con queso. Doble sabor.",
    "foto": "/images/doble-cuarto-de-libra-con-queso.png",
    "precio": 130.00
  },{
    "nombre": "Ensalada",
    "descripcion": "La ensalada para acompañar tu McCombo fue mejorada con una mayor variedad de hojas y tomates cherry.",
    "foto": "/images/ensalada.png",
    "precio": 50.00
  }]
});
db.restaurantes.insert({
  "nombre": "El bolon verde",
  "direccion": "9 de julio 3050",
  "platos": [{
    "nombre": "Ensaladilla Picante",
    "descripcion": "Pimiento asado, bacalao desalado y nuestra salsa personal a base de caldo de pimiento, ajo y aceite de oliva.",
    "foto": "/images/ensaladilla_picante.jpg",
    "precio": 230.00
  },{
    "nombre": "Ensalada de escabeches",
    "descripcion": "Tomate valenciano, boquerones y ventresca de atún marinados con nuestra salsa especial.",
    "foto": "/images/escabeches.jpg",
    "precio": 250.00
  },{
    "nombre": "Mousse de Piña, Limón y Hierbabuena",
    "descripcion": "Un postre refrescante, un sorbete convertido a mousse.",
    "foto": "/images/mousse.jpg",
    "precio": 150.00
  }]
});
db.restaurantes.insert({
  "nombre": "Pizza Vegana",
  "direccion": "Boulevard Pellegrini 3052",
  "platos": [{
    "nombre": "DELLA MAMMA",
    "descripcion": "Queso Paparella, Salsa de Tomates Casera, Aceitunas Verdes, Orégano, Alioli de Albahaca.",
    "foto": "/images/01-della-mamma.jpg",
    "precio": 129.00
  },{
    "nombre": "VEGALITANA",
    "descripcion": "Queso Paparella, Tomates en Rodajas, Ajo y Orégano, Alioli de Ajo.",
    "foto": "/images/02-vegalitana.jpg",
    "precio": 145.00
  },{
    "nombre": "CARAMELITA",
    "descripcion": "Queso Paparella, Cebolla Caramelizada, Orégano, Azúcar Integral Orgánica, Aceite de Oliva.",
    "foto": "/images/03-caramelita.jpg",
    "precio": 145.00
  }]
});