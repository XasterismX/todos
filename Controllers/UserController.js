const {User, TodoList} = require('../Models/models')
const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJWT = (id, email,username) => {
    return jwt.sign({
            id: id,
            email: email,
            username: username,
        }, process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController {
    async register(req, res, next){
        const {username, email, password} = req.body
            if(!username || !email || !password){
                return next(ApiError.badRequest('Некоректный email, пароль или username'))
            }
            const conditate = await User.findOne({where: {email}})
            if (conditate){
                return next(ApiError.badRequest('Пользователь существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({username, email, password:hashPassword})
            const token =  generateJWT(user.id, user.email,user.username)
            res.cookie('access_token', 'Bearer ' + token, {
                expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
            })
            return res.cookies

    }
    async login(req, res, next){
        const {id}= req.params
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user){
            return next(ApiError.ithernal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.ithernal('Неверный пароль'))
        }
        const token = generateJWT(user.id, user.email, user.username)
            res.cookie('access_token', 'Bearer ' + token, {
                expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
            })
        return res.status(200)


    }
    async auth(req, res, next){
        const token = generateJWT(req.user.id, req.user.email, req.user.username)
        res.redirect('/todos')

    }


}

module.exports = new UserController()