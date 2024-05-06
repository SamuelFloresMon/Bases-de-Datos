const RECETAS = [
    {
      "nombre": "Tarta de Manzana",
      "categoria": "Postre",
      "dificultad": "Fácil",
      "ingredientes": [
        { "_id": {"$oid": "663719622086a43bed1542d0"}, "cantidad": "4 unidades" },
        { "_id": {"$oid": "663719622086a43bed1542d1"}, "cantidad": "200g" },
        { "_id": {"$oid": "663719622086a43bed1542d2"}, "cantidad": "150g" },
        { "_id": {"$oid": "663719622086a43bed1542d3"}, "cantidad": "100g" },
        { "_id": {"$oid": "663719622086a43bed1542d4"}, "cantidad": "2 unidades" }
      ],
      "pasos": ["Preparar la masa.", "Pelar y cortar las manzanas.", "Hornear a 180°C por 45 minutos."],
      "calificacion": 4.5
    },
    {
      "nombre": "Sopa de Verduras",
      "categoria": "Plato principal",
      "dificultad": "Media",
      "ingredientes": [
        { "_id": {"$oid": "663719622086a43bed1542d5"}, "cantidad": "3 unidades" },
        { "_id": {"$oid": "663719622086a43bed1542d6"}, "cantidad": "2 unidades" },
        { "_id": {"$oid": "663719622086a43bed1542d7"}, "cantidad": "1 unidad" },
        { "_id": {"$oid": "663719622086a43bed1542d8"}, "cantidad": "2 tallos" },
        { "_id": {"$oid": "663719622086a43bed1542d9"}, "cantidad": "1 litro" },
        { "_id": {"$oid": "663719622086a43bed1542da"}, "cantidad": "2 cucharadas" },
        { "_id": {"$oid": "663719622086a43bed1542db"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542dc"}, "cantidad": "al gusto" }
      ],
      "pasos": ["Picar las verduras.", "Cocinar las verduras en caldo.", "Añadir condimentos al gusto."],
      "calificacion": 4.2
    },
    {
      "nombre": "Pollo al Horno",
      "categoria": "Plato principal",
      "dificultad": "Fácil",
      "ingredientes": [
        { "_id": {"$oid": "663719622086a43bed1542dd"}, "cantidad": "1 entero" },
        { "_id": {"$oid": "663719622086a43bed1542de"}, "cantidad": "1 unidad" },
        { "_id": {"$oid": "663719622086a43bed1542df"}, "cantidad": "4 dientes" },
        { "_id": {"$oid": "663719622086a43bed1542e0"}, "cantidad": "2 ramitas" },
        { "_id": {"$oid": "663719622086a43bed1542da"}, "cantidad": "3 cucharadas" },
        { "_id": {"$oid": "663719622086a43bed1542db"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542dc"}, "cantidad": "al gusto" }
      ],
      "pasos": ["Marinar el pollo.", "Hornear a 200°C por 1 hora.", "Servir caliente."],
      "calificacion": 4.7
    },
    {
      "nombre": "Ensalada César",
      "categoria": "Entrante",
      "dificultad": "Fácil",
      "ingredientes": [
        { "_id": {"$oid": "663719622086a43bed1542e0"}, "cantidad": "1 cabeza" },
        { "_id": {"$oid": "663719622086a43bed1542e1"}, "cantidad": "200g" },
        { "_id": {"$oid": "663719622086a43bed1542e2"}, "cantidad": "2 rebanadas" },
        { "_id": {"$oid": "663719622086a43bed1542da"}, "cantidad": "3 cucharadas" },
        { "_id": {"$oid": "663719622086a43bed1542dd"}, "cantidad": "1 unidad" },
        { "_id": {"$oid": "663719622086a43bed1542de"}, "cantidad": "1 diente" },
        { "_id": {"$oid": "663719622086a43bed1542e2"}, "cantidad": "50g" },
        { "_id": {"$oid": "663719622086a43bed1542e3"}, "cantidad": "al gusto" }
      ],
      "pasos": ["Preparar la lechuga.", "Cocinar el pollo.", "Hacer la salsa César.", "Montar la ensalada."],
      "calificacion": 4.8
    },
    {
      "nombre": "Pasta Alfredo",
      "categoria": "Plato principal",
      "dificultad": "Media",
      "ingredientes": [
        { "_id": {"$oid": "663719622086a43bed1542e3"}, "cantidad": "300g" },
        { "_id": {"$oid": "663719622086a43bed1542d3"}, "cantidad": "100g" },
        { "_id": {"$oid": "663719622086a43bed1542e4"}, "cantidad": "200ml" },
        { "_id": {"$oid": "663719622086a43bed1542e2"}, "cantidad": "100g" },
        { "_id": {"$oid": "663719622086a43bed1542db"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542dc"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542e5"}, "cantidad": "al gusto" }
      ],
      "pasos": ["Cocinar la pasta al dente.", "Preparar la salsa Alfredo.", "Mezclar y servir."],
      "calificacion": 4.6
    },
    {
      "nombre": "Hamburguesa Clásica",
      "categoria": "Plato principal",
      "dificultad": "Fácil",
      "ingredientes": [
        { "_id": {"$oid": "663719622086a43bed1542e6"}, "cantidad": "200g" },
        { "_id": {"$oid": "663719622086a43bed1542e7"}, "cantidad": "1 unidad" },
        { "_id": {"$oid": "663719622086a43bed1542e8"}, "cantidad": "unas hojas" },
        { "_id": {"$oid": "663719622086a43bed1542e9"}, "cantidad": "1 rodaja" },
        { "_id": {"$oid": "663719622086a43bed1542ea"}, "cantidad": "1 loncha" },
        { "_id": {"$oid": "663719622086a43bed1542d7"}, "cantidad": "1 rodaja" },
        { "_id": {"$oid": "663719622086a43bed1542eb"}, "cantidad": "2 unidades" },
        { "_id": {"$oid": "663719622086a43bed1542ec"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542ed"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542db"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542dc"}, "cantidad": "al gusto" }
      ],
      "pasos": ["Preparar la carne.", "Montar la hamburguesa.", "Cocinar a la parrilla."],
      "calificacion": 4.4
    },
    {
      "nombre": "Guacamole",
      "categoria": "Acompañamiento",
      "dificultad": "Fácil",
      "ingredientes": [
        { "_id": {"$oid": "663719622086a43bed1542ef"}, "cantidad": "2 unidades" },
        { "_id": {"$oid": "663719622086a43bed1542e9"}, "cantidad": "1 unidad" },
        { "_id": {"$oid": "663719622086a43bed1542d7"}, "cantidad": "1/2 unidad" },
        { "_id": {"$oid": "663719622086a43bed1542dd"}, "cantidad": "1 unidad" },
        { "_id": {"$oid": "663719622086a43bed1542f0"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542db"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542dc"}, "cantidad": "al gusto" }
      ],
      "pasos": ["Preparar los ingredientes.", "Mezclar todo en un tazón.", "Servir con nachos o tacos."],
      "calificacion": 4.9
    },
    {
      "nombre": "Sándwich de Pavo",
      "categoria": "Plato principal",
      "dificultad": "Fácil",
      "ingredientes": [
        { "_id": {"$oid": "663719622086a43bed1542e1"}, "cantidad": "2 rebanadas" },
        { "_id": {"$oid": "663719622086a43bed1542e6"}, "cantidad": "100g" },
        { "_id": {"$oid": "663719622086a43bed1542ea"}, "cantidad": "1 loncha" },
        { "_id": {"$oid": "663719622086a43bed1542e8"}, "cantidad": "unas hojas" },
        { "_id": {"$oid": "663719622086a43bed1542e9"}, "cantidad": "1 rodaja" },
        { "_id": {"$oid": "663719622086a43bed1542ed"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542ee"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542db"}, "cantidad": "al gusto" },
        { "_id": {"$oid": "663719622086a43bed1542dc"}, "cantidad": "al gusto" }
      ],
      "pasos": ["Tostar el pan.", "Armar el sándwich con los ingredientes.", "Servir frío."],
      "calificacion": 4.3
    }
];

module.exports = RECETAS;