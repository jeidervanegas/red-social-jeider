const express = require('express');
const cors = require('cors');
const db = require('./database/db')

const constrollers = require('./controllers')

const app = express();
const port = 6000;

//middlewares
app.use(express.json());
app.use(cors());


//las rutas
app.get('/user/:userId', constrollers.getUserById);
app.post('/register', constrollers.register);
app.post('/login', constrollers.login);

//escuchar al servidor
app.listen(port, () => {
    console.log(`El servidor se ha levantado en el puerto ${port}`);
    db()
})

module.exports = app;