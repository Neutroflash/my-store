const express = require('express')

const router = express.Router()

router.get('/carrito/:id/user/:userId', (req, res) => {
  const {id, userId} = req.params
  res.json({
    id,
    userId
  })
});

module.exports = router
