const User = require('../model/user')
const bcrypt = require('bcryptjs');

const register = async(req, res) => {
    const { name, email, password } = req.body;

    User.findOne({ email })
    .then(user => {
        if(user) {
            return res.json({msg: 'El usuario ya existe'})
        } else if(!name || !email || !password) {
            return res.json({msg: 'Todos los campos son olbigatorios'})
        } else {
            bcrypt.hash(password, 10, (error, passwordHaseado) => {
                if(error) {
                    res.json({error})
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password: passwordHaseado
                    });
                    newUser.save()
                    .then(user => {
                        res.json({msg: 'usuario creado correctamente', user})
                    })
                    .catch(error => console.error(error))
                    
                }
            })
        }
    })

}

module.exports = register;