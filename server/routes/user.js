const userRouter = require('express').Router()
// const getUserById = require('../controllers/getUserById')
const userController = require('../controllers/perfil')
const login = require('../middlewares/authentication')


// userRouter.get('/user/:userId', getUserById)
userRouter.get('/user/self', login, userController.getSelf)
userRouter.get('/user/:userId', userController.getUserById)
userRouter.put('/user', login,  userController.editProfile)

module.exports = userRouter
