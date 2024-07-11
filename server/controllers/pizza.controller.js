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


export const findPizzaById = async (req,res,next ) =>{

    try{
        const {id} = req.params
        // SETTING THE VAR ID EQUAL TO PARAMETER WE ENTER INTO OUR ROUTE 
        const findPizzaId = await Pizza.findByPk(id)
        res.status(200).json(findPizzaId)
    }catch (error){
        res.status(400).json(error)
    }
}


export const updatePizzaById = async(req,res,next)=>{
    
    try{
        const {id} = req.params
        const pizzaToUpdate = req.body
        const foundPizza = await Pizza.findByPk(id)
        if (!foundPizza){
            return res.status(404).json({ message: 'User not found' });
        }
        foundPizza.userId = pizzaToUpdate.userId
        foundPizza.method = pizzaToUpdate.method
        foundPizza.size = pizzaToUpdate.size
        foundPizza.crust = pizzaToUpdate.crust
        foundPizza.qty = pizzaToUpdate.qty
        foundPizza.favorite = pizzaToUpdate.favorite
        foundPizza.comments = pizzaToUpdate.comments
        await foundPizza.save();
        res.status(200).json(foundPizza)
    }catch (error){
        console.error(error);
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