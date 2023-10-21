const User = require('../model/user')

const getUserById = async(req, res) => {

    const { userId } = req.params;
    if(userId.length === 24) {
        User.findById(userId)
        .then(user => {
            if(!user) {
                return res.json({msg: 'Usuario no encontrado'})
            } else {
                const { _id, password, _v, ...resto} = user._doc

                res.json(resto)
            }
        });
    } else {
        res.json({msg: 'Estas enviando una contraseña incorrecta'})
    }
}

module.exports = getUserById;