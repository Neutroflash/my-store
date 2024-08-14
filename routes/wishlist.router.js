const express = require('express')

const router = express.Router()

router.get('/wishlist/:wishId/product/:productId', (req, res) => {
  const wishId = req.params.wishId
  const productId = req.params.productId

  res.json({
    wishId,
    productId
  })
})

module.exports = router
