const express = require('express')
const cors = require('cors')
require('./database/db')

// Importantando/requeriendo rutas
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')

// Config
const app = express()
const port = 6000

// Middlewares
app.use(express.json())
app.use(cors())

// Rutas
app.use(userRouter)
app.use(authRouter)

// Escuchar al servidor
app.listen(port, () => {
  console.log(`El servidor se ha levantado en el puerto ${port}`)
})
