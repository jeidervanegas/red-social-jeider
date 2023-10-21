const bcrypt = require('bcryptjs');
const User = require('../model/user');

const login = async(req, res) => {

    const { email, password } = req.body;

    User.findOne({ email })
    .then(user =>  {
        if(!user) {
            return res.json({msg: 'Usuario no encontrado'})
        }

        bcrypt.compare(password, user.password)
        .then(esCorrecto => {
            if(esCorrecto) {
                const { id, name } = user;

                return res.json({msg: 'Usuario logeado correctamente', user: {
                    id, 
                    name
                }});
            } else {
                return res.json({msg: 'Contraseña incorrecta'})
            }
        });
    });
}

module.exports = login;