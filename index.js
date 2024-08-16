const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler.js')

const app = express();
const port = 3300;

app.use(express.json())
app.use(cors())

const whitelist = []

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});
