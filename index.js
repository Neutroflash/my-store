const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola esta es una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'producto 1',
      precio: 1000,
    },
    {
      name: 'producto 2',
      precio: 2000
    }
  ]);
});

app.get('/products/:id', (req,res) => {
  //const id = req.params.id
  const {id} = req.params

  res.json({
    id,
    name: 'producto 2',
    precio: 2000
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  //const categoryId = req.params.categoryId
  //const productId = req.params.productId

  const {categoryId , productId} = req.params

  res.json({
    categoryId,
    productId
  })
});

app.get('/carrito/:id/user/:userId', (req, res) => {
  const {id, userId} = req.params
  res.json({
    id,
    userId
  })
});

app.get('/wishlist/:wishId/product/:productId', (req, res) => {
  const wishId = req.params.wishId
  const productId = req.params.productId

  res.json({
    wishId,
    productId
  })
})

app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});
