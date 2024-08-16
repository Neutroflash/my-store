const express = require('express')

const router = express.Router()

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  //const categoryId = req.params.categoryId
  //const productId = req.params.productId

  const {categoryId , productId} = req.params

  res.json({
    categoryId,
    productId
  })
});

module.exports = router
