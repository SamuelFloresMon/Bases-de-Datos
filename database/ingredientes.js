const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const INGREDIENTES = [
  {
    _id: new ObjectId('663719622086a43bed1542d0'),
    nombre: 'Manzanas',
    categoria: 'Fruta',
    descripcion: 'Fruta dulce y jugosa, perfecta para postres.',
    stock: 65,
    peso: 150
  },
  {
    _id: new ObjectId('663719622086a43bed1542d1'),
    nombre: 'Harina',
    categoria: 'Harina',
    descripcion: 'Harina de trigo común.',
    stock: 40,
    peso: 500
  },
  {
    _id: new ObjectId('663719622086a43bed1542d2'),
    nombre: 'Azúcar',
    categoria: 'Endulzante',
    descripcion: 'Azúcar blanca refinada.',
    stock: 85,
    peso: 250
  },
  {
    _id: new ObjectId('663719622086a43bed1542d3'),
    nombre: 'Mantequilla',
    categoria: 'Lácteo',
    descripcion: 'Mantequilla sin sal.',
    stock: 30,
    peso: 200
  },
  {
    _id: new ObjectId('663719622086a43bed1542d4'),
    nombre: 'Huevos',
    categoria: 'Animal',
    descripcion: 'Huevos frescos de gallina.',
    stock: 55,
    peso: 60
  },
  {
    _id: new ObjectId('663719622086a43bed1542d5'),
    nombre: 'Zanahorias',
    categoria: 'Vegetal',
    descripcion: 'Verdura naranja rica en betacaroteno.',
    stock: 20,
    peso: 100
  },
  {
    _id: new ObjectId('663719622086a43bed1542d6'),
    nombre: 'Patatas',
    categoria: 'Vegetal',
    descripcion: 'Tubérculo versátil para cocinar.',
    stock: 75,
    peso: 200
  },
  {
    _id: new ObjectId('663719622086a43bed1542d7'),
    nombre: 'Cebolla',
    categoria: 'Vegetal',
    descripcion: 'Ingrediente básico en muchas recetas.',
    stock: 45,
    peso: 100
  },
  {
    _id: new ObjectId('663719622086a43bed1542d8'),
    nombre: 'Apio',
    categoria: 'Vegetal',
    descripcion: 'Vegetal con un sabor fresco y crujiente.',
    stock: 90,
    peso: 50
  },
  {
    _id: new ObjectId('663719622086a43bed1542d9'),
    nombre: 'Caldo de Verduras',
    categoria: 'Líquido',
    descripcion: 'Base para sopas y guisos.',
    stock: 70,
    peso: 1000
  },
  {
    _id: new ObjectId('663719622086a43bed1542da'),
    nombre: 'Aceite de Oliva',
    categoria: 'Aceite',
    descripcion: 'Aceite vegetal saludable para cocinar.',
    stock: 50,
    peso: 1000
  },
  {
    _id: new ObjectId('663719622086a43bed1542db'),
    nombre: 'Sal',
    categoria: 'Condimento',
    descripcion: 'Condimento básico para realzar el sabor.',
    stock: 35,
    peso: 500
  },
  {
    _id: new ObjectId('663719622086a43bed1542dc'),
    nombre: 'Pimienta',
    categoria: 'Condimento',
    descripcion: 'Añade un toque picante a los platos.',
    stock: 95,
    peso: 100
  },
  {
    _id: new ObjectId('663719622086a43bed1542dd'),
    nombre: 'Limón',
    categoria: 'Fruta',
    descripcion: 'Fruta cítrica utilizada para dar sabor.',
    stock: 60,
    peso: 100
  },
  {
    _id: new ObjectId('663719622086a43bed1542de'),
    nombre: 'Ajo',
    categoria: 'Vegetal',
    descripcion: 'Ingrediente aromático con un sabor distintivo.',
    stock: 80,
    peso: 20
  },
  {
    _id: new ObjectId('663719622086a43bed1542df'),
    nombre: 'Romero fresco',
    categoria: 'Hierba',
    descripcion: 'Hierba aromática común en la cocina mediterránea.',
    stock: 25,
    peso: 10
  },
  {
    _id: new ObjectId('663719622086a43bed1542e0'),
    nombre: 'Lechuga Romana',
    categoria: 'Vegetal',
    descripcion: 'Variedad de lechuga de hojas largas y crujientes.',
    stock: 100,
    peso: 150
  },
  {
    _id: new ObjectId('663719622086a43bed1542e1'),
    nombre: 'Pan de molde',
    categoria: 'Pan',
    descripcion: 'Pan blanco en rebanadas.',
    stock: 70,
    peso: 500
  },
  {
    _id: new ObjectId('663719622086a43bed1542e2'),
    nombre: 'Queso Parmesano',
    categoria: 'Lácteo',
    descripcion: 'Queso italiano duro y fuertemente aromático.',
    stock: 40,
    peso: 100
  },
  {
    _id: new ObjectId('663719622086a43bed1542e3'),
    nombre: 'Pasta (Fettuccine)',
    categoria: 'Pasta',
    descripcion: 'Pasta larga y plana.',
    stock: 60,
    peso: 500
  },
  {
    _id: new ObjectId('663719622086a43bed1542e4'),
    nombre: 'Nata (Crema de leche)',
    categoria: 'Lácteo',
    descripcion: 'Crema láctea utilizada en la cocina.',
    stock: 80,
    peso: 200
  },
  {
    _id: new ObjectId('663719622086a43bed1542e5'),
    nombre: 'Nuez moscada',
    categoria: 'Especia',
    descripcion: 'Especia utilizada en una variedad de recetas.',
    stock: 40,
    peso: 10
  },
  {
    _id: new ObjectId('663719622086a43bed1542e6'),
    nombre: 'Carne picada de res',
    categoria: 'Animal',
    descripcion: 'Carne de res molida.',
    stock: 70,
    peso: 200
  },
  {
    _id: new ObjectId('663719622086a43bed1542e7'),
    nombre: 'Pan de hamburguesa',
    categoria: 'Pan',
    descripcion: 'Pan especial para hamburguesas.',
    stock: 100,
    peso: 100
  },
  {
    _id: new ObjectId('663719622086a43bed1542e8'),
    nombre: 'Lechuga',
    categoria: 'Vegetal',
    descripcion: 'Hojas verdes crujientes.',
    stock: 80,
    peso: 100
  },
  {
    _id: new ObjectId('663719622086a43bed1542e9'),
    nombre: 'Tomate',
    categoria: 'Fruta',
    descripcion: 'Fruta roja y jugosa utilizada en muchas recetas.',
    stock: 55,
    peso: 100
  },
  {
    _id: new ObjectId('663719622086a43bed1542ea'),
    nombre: 'Queso Cheddar',
    categoria: 'Queso',
    descripcion: 'Queso amarillo cremoso con un sabor fuerte.',
    stock: 65,
    peso: 100
  },
  {
    _id: new ObjectId('663719622086a43bed1542eb'),
    nombre: 'Pepinillos',
    categoria: 'Vegetal',
    descripcion: 'Pepinos en vinagre.',
    stock: 45,
    peso: 50
  },
  {
    _id: new ObjectId('663719622086a43bed1542ec'),
    nombre: 'Ketchup',
    categoria: 'Salsa',
    descripcion: 'Salsa de tomate condimentada.',
    stock: 75,
    peso: 250
  },
  {
    _id: new ObjectId('663719622086a43bed1542ed'),
    nombre: 'Mostaza',
    categoria: 'Salsa',
    descripcion: 'Condimento amarillo picante.',
    stock: 90,
    peso: 150
  },
  {
    _id: new ObjectId('663719622086a43bed1542ee'),
    nombre: 'Mayonesa',
    categoria: 'Salsa',
    descripcion: 'Salsa cremosa a base de huevo y aceite.',
    stock: 50,
    peso: 250
  },
  {
    _id: new ObjectId('663719622086a43bed1542ef'),
    nombre: 'Aguacate',
    categoria: 'Fruta',
    descripcion: 'Fruta verde cremosa.',
    stock: 65,
    peso: 200
  },
  {
    _id: new ObjectId('663719622086a43bed1542f0'),
    nombre: 'Cilantro fresco',
    categoria: 'Hierba',
    descripcion: 'Hierba fresca con un aroma distintivo.',
    stock: 40,
    peso: 25
  },
  {
    _id: new ObjectId('663719622086a43bed1542f1'),
    nombre: 'Nachos',
    categoria: 'Acompañamiento',
    descripcion: 'Triángulos de maíz fritos.',
    stock: 80,
    peso: 200
  }
];

module.exports = INGREDIENTES;
