import User from "../Models/UserModel.js";

class UserControler{
    async create(req,res){
        try {
            const {username, email, password} = req.body
            const user = await User.create({
                username: username,
                email: email,
                password: password
            })
            res.json(user)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try{
            const user = await User.findAll()
            res.json(user)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try{
            const {id} = req.params
            if (!id){
                res.status(400).json({message: "Id не указан"})
            }

            const user = await User.findOne({where: { id: id}})
            res.json(user)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const {id} = req.params
            const {username, email,password} = req.body
            if (!id){
                res.status(400).json({message: "Id не указан"})
            }

            const user = await User.findOne({where: { id: id}})
            await user.update({
                username: username,
                email: email,
                password: password
            })
            res.json(user)
    }catch (e){
            res.status(500).json(e)
    }}
    async delete(req,res){
    try {
        const {id} = req.params
        if (!id) {
            res.status(400).json({message: "Id не указан"})
        }
        const user = await User.findOne({where: { id: id}})
        await user.delete({where: {id: id }})
        res.json(user)
    }catch (e) {
        res.status(500).json(e)
    }
}

}

export default new UserControler()