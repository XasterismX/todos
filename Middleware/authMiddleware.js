const  jwt = require('jsonwebtoken')
module.exports = function (req,res,next){
    if(req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.cookies.access_token.split(' ')[1]
        console.log(token)
        const id = req.cookies.access_token.split(' ')[0]
        console.log(id)
        if (!token){
            return res.status(401).json({message: 'Не авторизован'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
    }catch (e) {
        res.status(401).json({message: 'Не авторизован'})
    }
}