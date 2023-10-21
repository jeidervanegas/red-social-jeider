const bcrypt = require('bcryptjs')
const User = require('../model/user')

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.json({ msg: 'Usuario no encontrado' })
  }

  const esCorrecto = await bcrypt.compare(password, user.password)

  if (esCorrecto) {
    const { id, name } = user

    return res.json({
      msg: 'Usuario logeado correctamente',
      user: {
        id,
        name
      }
    })
  }
  return res.json({ msg: 'Contraseña incorrecta' })
}

const register = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (user) {
      return res.json({ msg: 'El usuario ya existe' })
    }

    if (!name || !email || !password) {
      return res.json({ msg: 'Todos los campos son olbigatorios' })
    }

    const passwordHaseado = bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      email,
      password: passwordHaseado
    })

    await newUser.save()

    return res.json({ msg: 'usuario creado correctamente', user })
  } catch (error) {
    return res.json({ error })
  }
}

module.exports = {
  login,
  register
}
