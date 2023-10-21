const moongose = require('mongoose')

const MONGO_URL = 'mongodb://127.0.0.1:27017/mern-login';

const db = async() => {
    await moongose.connect(MONGO_URL)
    .then(() => console.log('CONECTADO A LA BASE DE DATOS!'))
    .catch(error => console.error(error))
}

module.exports = db;