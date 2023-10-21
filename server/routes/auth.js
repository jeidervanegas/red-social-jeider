const authRouter = require('express').Router()
const authCtrl = require('../controllers/auth')

authRouter.post('/login', authCtrl.login)
authRouter.post('/register', authCtrl.register)

module.exports = authRouter
