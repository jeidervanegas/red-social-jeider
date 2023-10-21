const moongose = require('mongoose')

const MONGO_URL = 'mongodb://127.0.0.1:27017/mern-login'

moongose
  .connect(MONGO_URL)
  .then(() => console.log('CONECTADO A LA BASE DE DATOS!'))
  .catch((error) => console.error('[DB ERROR]', error?.message))
