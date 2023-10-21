const userRouter = require('express').Router()
const getUserById = require('../controllers/getUserById')

userRouter.get('/user/:userId', getUserById)

module.exports = userRouter
