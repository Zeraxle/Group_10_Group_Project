import Pizza from "../models/pizza.model.js"


export const createPizza = async (req, res, next ) =>{
    try{
        const createNewPizza = await Pizza.create(req.body)
        res.status(200).json(createNewPizza)
    }catch (error ){
        res.status(400).json(400)
    }
}

export const findFavPizza = async (req, res, next) =>{
    try{
        // const foundUser = await User.findByPk(userId)
        // const {userId} = req.params
        // console.log("yooooo")
        const getAllFavPizzas = await Pizza.findAll({
            // console.log("yooooooooooo")
            where : {favorite  : true},
            // where : { userId.pizzas.},

            // include :[
            //     {
            //     model :  Pizza
            //     }

            // ] 
        })
        res.status(200).json(getAllFavPizzas)


    }catch (error){
        res.status(400).json(error)
    }


}



// export const createUser= async(req,res, next )=>{
//     try{
//     const createThisUser = await User.create(req.body)
//     res.status(200).json(createThisUser)
//     } catch(error){
//         res.status(400).json(400)
// }
// }