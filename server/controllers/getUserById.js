const User = require('../model/user')

const getUserById = async (req, res) => {
  const { userId } = req.params
  let user

  if (userId.length < 1) {
    return res.status(404).json({
      msg: 'Se require `userId` como parametro'
    })
  }

  try {
    user = await User.findById(userId)
  } catch (error) {
    return res.status(500).json({
      code: 'ERROR_CONEXION_ENTRY',
      msg: 'Error interno del servidor'
    })
  }

  if (!user) {
    return res.status(404).json({ msg: 'Usuario no encontrado' })
  }

  const { _id: id, password, _v, ...resto } = user._doc

  return res.json({ id, ...resto })
}

module.exports = getUserById
