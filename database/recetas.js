db.reservaciones.insertMany([
    {
      "nombre": "Tarta de Manzana",
      "categoria": "Postre",
      "dificultad": "Fácil",
      "ingredientes": [
        { "nombre": "Manzanas", "cantidad": "4 unidades" },
        { "nombre": "Harina", "cantidad": "200g" },
        { "nombre": "Azúcar", "cantidad": "150g" },
        { "nombre": "Mantequilla", "cantidad": "100g" },
        { "nombre": "Huevos", "cantidad": "2 unidades" }
      ],
      "pasos": ["Preparar la masa.", "Pelar y cortar las manzanas.", "Hornear a 180°C por 45 minutos."],
      "calificacion": 4.5
    },
    {
      "nombre": "Sopa de Verduras",
      "categoria": "Plato principal",
      "dificultad": "Media",
      "ingredientes": [
        { "nombre": "Zanahorias", "cantidad": "3 unidades" },
        { "nombre": "Patatas", "cantidad": "2 unidades" },
        { "nombre": "Cebolla", "cantidad": "1 unidad" },
        { "nombre": "Apio", "cantidad": "2 tallos" },
        { "nombre": "Caldo de Verduras", "cantidad": "1 litro" },
        { "nombre": "Aceite de Oliva", "cantidad": "2 cucharadas" },
        { "nombre": "Sal", "cantidad": "al gusto" },
        { "nombre": "Pimienta", "cantidad": "al gusto" }
      ],
      "pasos": ["Picar las verduras.", "Cocinar las verduras en caldo.", "Añadir condimentos al gusto."],
      "calificacion": 4.2
    },
    {
      "nombre": "Pollo al Horno",
      "categoria": "Plato principal",
      "dificultad": "Fácil",
      "ingredientes": [
        { "nombre": "Pollo", "cantidad": "1 entero" },
        { "nombre": "Limón", "cantidad": "1 unidad" },
        { "nombre": "Ajo", "cantidad": "4 dientes" },
        { "nombre": "Romero fresco", "cantidad": "2 ramitas" },
        { "nombre": "Aceite de Oliva", "cantidad": "3 cucharadas" },
        { "nombre": "Sal", "cantidad": "al gusto" },
        { "nombre": "Pimienta", "cantidad": "al gusto" }
      ],
      "pasos": ["Marinar el pollo.", "Hornear a 200°C por 1 hora.", "Servir caliente."],
      "calificacion": 4.7
    },
    {
      "nombre": "Ensalada César",
      "categoria": "Entrante",
      "dificultad": "Fácil",
      "ingredientes": [
        { "nombre": "Lechuga Romana", "cantidad": "1 cabeza" },
        { "nombre": "Pollo a la parrilla", "cantidad": "200g" },
        { "nombre": "Pan de molde", "cantidad": "2 rebanadas" },
        { "nombre": "Aceite de Oliva", "cantidad": "3 cucharadas" },
        { "nombre": "Limón", "cantidad": "1 unidad" },
        { "nombre": "Ajo", "cantidad": "1 diente" },
        { "nombre": "Queso Parmesano", "cantidad": "50g" },
        { "nombre": "Salsa César", "cantidad": "al gusto" }
      ],
      "pasos": ["Preparar la lechuga.", "Cocinar el pollo.", "Hacer la salsa César.", "Montar la ensalada."],
      "calificacion": 4.8
    },
    {
      "nombre": "Pasta Alfredo",
      "categoria": "Plato principal",
      "dificultad": "Media",
      "ingredientes": [
        { "nombre": "Pasta (Fettuccine)", "cantidad": "300g" },
        { "nombre": "Mantequilla", "cantidad": "100g" },
        { "nombre": "Nata (Crema de leche)", "cantidad": "200ml" },
        { "nombre": "Queso Parmesano rallado", "cantidad": "100g" },
        { "nombre": "Sal", "cantidad": "al gusto" },
        { "nombre": "Pimienta", "cantidad": "al gusto" },
        { "nombre": "Nuez moscada", "cantidad": "al gusto" }
      ],
      "pasos": ["Cocinar la pasta al dente.", "Preparar la salsa Alfredo.", "Mezclar y servir."],
      "calificacion": 4.6
    },
    {
      "nombre": "Hamburguesa Clásica",
      "categoria": "Plato principal",
      "dificultad": "Fácil",
      "ingredientes": [
        { "nombre": "Carne picada de res", "cantidad": "200g" },
        { "nombre": "Pan de hamburguesa", "cantidad": "1 unidad" },
        { "nombre": "Lechuga", "cantidad": "unas hojas" },
        { "nombre": "Tomate", "cantidad": "1 rodaja" },
        { "nombre": "Queso Cheddar", "cantidad": "1 loncha" },
        { "nombre": "Cebolla", "cantidad": "1 rodaja" },
        { "nombre": "Pepinillos", "cantidad": "2 unidades" },
        { "nombre": "Ketchup", "cantidad": "al gusto" },
        { "nombre": "Mostaza", "cantidad": "al gusto" },
        { "nombre": "Sal", "cantidad": "al gusto" },
        { "nombre": "Pimienta", "cantidad": "al gusto" }
      ],
      "pasos": ["Preparar la carne.", "Montar la hamburguesa.", "Cocinar a la parrilla."],
      "calificacion": 4.4
    },
    {
      "nombre": "Guacamole",
      "categoria": "Acompañamiento",
      "dificultad": "Fácil",
      "ingredientes": [
        { "nombre": "Aguacate", "cantidad": "2 unidades" },
        { "nombre": "Tomate", "cantidad": "1 unidad" },
        { "nombre": "Cebolla", "cantidad": "1/2 unidad" },
        { "nombre": "Limón", "cantidad": "1 unidad" },
        { "nombre": "Cilantro fresco", "cantidad": "al gusto" },
        { "nombre": "Sal", "cantidad": "al gusto" },
        { "nombre": "Pimienta", "cantidad": "al gusto" }
      ],
      "pasos": ["Preparar los ingredientes.", "Mezclar todo en un tazón.", "Servir con nachos o tacos."],
      "calificacion": 4.9
    },
    {
      "nombre": "Sándwich de Pavo",
      "categoria": "Plato principal",
      "dificultad": "Fácil",
      "ingredientes": [
        { "nombre": "Pan de molde integral", "cantidad": "2 rebanadas" },
        { "nombre": "Pavo en lonchas", "cantidad": "100g" },
        { "nombre": "Queso suizo", "cantidad": "1 loncha" },
        { "nombre": "Lechuga", "cantidad": "unas hojas" },
        { "nombre": "Tomate", "cantidad": "1 rodaja" },
        { "nombre": "Mostaza", "cantidad": "al gusto" },
        { "nombre": "Mayonesa", "cantidad": "al gusto" },
        { "nombre": "Sal", "cantidad": "al gusto" },
        { "nombre": "Pimienta", "cantidad": "al gusto" }
      ],
      "pasos": ["Tostar el pan.", "Armar el sándwich con los ingredientes.", "Servir frío."],
      "calificacion": 4.3
    }
]);