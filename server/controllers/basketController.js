const { Device, BasketDevice, Basket } = require("../models/models")

class BasketController {
    // ------ CRUD корзины ------ //

    async addToBasket(req,res,next){
        const user = req.user
        const {id, name} = req.body
        const {deviceId} = req.body
        const basket = await BasketDevice.create({id, name, basketId : user.id, deviceId : deviceId})
        return res.json(basket)
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketDevice.findAll({include: {
                model: Device
            }, where: {basketId: id}})

        return res.json(basket)
    }

    async deleteFromBasket(req, res) {
        //const user = req.user
        const {name} = req.params
        const basket = await BasketDevice.destroy(
            {
                where: {name}
            },
        )
        return res.json(basket)
    }
}

module.exports = new BasketController()