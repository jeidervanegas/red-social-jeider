const bcrypt = require('bcryptjs');
const User = require('../model/user');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.json({ msg: 'Usuario no encontrado' })
  }

  const esCorrecto = await bcrypt.compare(password, user.password)

  if (esCorrecto) {
    const accessToken = await jwt.sign({uid: user._id}, '12345')

    return res.json({
      msg: 'Usuario logeado correctamente',
      accessToken
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

    const passwordHaseado = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      email,
      password: passwordHaseado
    })

    await newUser.save()
    const accessToken = await jwt.sign({uid: newUser._id}, '12345')

    return res.json({
      msg: 'usuario creado correctamente',
      accessToken
    })
    
  } catch (error) {
    return res.json({ error })
  }
}

module.exports = {
  login,
  register
}
