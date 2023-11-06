const User = require('../model/user')

 const editProfile = async(req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await User.findOneAndUpdate({ _id:req.user }, {email, name, password})
        await user.save()
        return res.json({message: 'Se ha actualizado correctamente'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
 const getSelf = async(req, res) => {
    try {
        const user = await User.findById(req.user)
        return res.json({message: 'Los datos se han obtenido satisfactoriamente', user:{
            name: user.name,
            email: user.email,
            photo: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2015/11/albert-einstein-retrato-scaled.jpg?fit=2560%2C1985&quality=50&strip=all&ssl=1'
            
        }})

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
 const getUserById = async(req, res) => {
    
    try {
        const user = await User.findById(req.params.userId)
        return res.json({message: 'Los datos se han obtenido satisfactoriamente', user:{
            name: user.name,
            photo: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2015/11/albert-einstein-retrato-scaled.jpg?fit=2560%2C1985&quality=50&strip=all&ssl=1'
            
        }})

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    editProfile,
    getSelf,
    getUserById
}