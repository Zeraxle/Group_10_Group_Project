import Pizza from "../models/pizza.model.js"


export const createPizza = async (req, res, next ) =>{
    try{
        console.log("yess")
        const createNewPizza = await Pizza.create(req.body)
        res.status(200).json(createNewPizza)
    }catch (error ){
        res.status(400).json(400)
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