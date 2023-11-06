const jwt = require('jsonwebtoken')

module.exports = async(req, res, next) => {
    const token = req.headers.Authorization?.replace('Bearer ', '')
    try {
        const decoded = await jwt.verify(token, '12345')
        req.user = decoded.uid
        return next()
    } catch (error) {
         return res.status(401).json({message: error.message})
        
    }
}