
import { Where } from "sequelize/lib/utils";
import Pizza from "../models/pizza.model.js";
import User from "../models/user.model.js";


// READ
export const findAllUsers = async(req,res, next ) =>{
    try{
    const getAllUsers = await User.findAll()
    res.status(200).json(getAllUsers)
    } 
    catch(error){
        res.status(400).json(error)
    
}
}


// CREATE
export const createUser= async(req,res, next )=>{
    try{
    const createThisUser = await User.create(req.body)
    res.status(200).json(createThisUser)
    } catch(error){
        res.status(400).json(error)
}
}


// FIND BY ID
export const findUserById = async (req,res,next ) =>{

    try{
        const {id} = req.params
        // SETTING THE VAR ID EQUAL TO PARAMETER WE ENTER INTO OUR ROUTE 
        const findUserId = await User.findByPk(id)
        res.status(200).json(findUserId)
    }catch (error){
        res.status(400).json(error)
    }
}

export const logUserIn = async (req,res,next ) =>{

    try{
        const { email, password } = req.body
        // SETTING THE VAR ID EQUAL TO PARAMETER WE ENTER INTO OUR ROUTE 
        const isCorrectemail = await User.findOne({
            where :{email : email}
            })
        if (!isCorrectemail){
            return res.status(404).json({ errormsg: 'User not found' });
        }
        const isCorrectPassword = isCorrectemail.authenticate(password)
        if (!isCorrectPassword){
            return res.status(404).json({ errormsg: 'pass not found' });
        }
        
        res.status(200).json(isCorrectemail)
    }catch (error){
        res.status(400).json(error)
    }
}

export const getALLUsersPizzas = async (req, res, next) =>{
    try{
        const {userId} = req.params
        // console.log("yooooo")
        const getAllPizzasByUser = await User.findAll({
            // console.log("yooooooooooo")
            where : {id : userId},

            include :[
                {
                model :  Pizza
                }

            ] 
        })
        res.status(200).json(getAllPizzasByUser)


    }catch (error){
        res.status(400).json(error)
    }


}

export const logOutUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByPk(id)
        res.clearCookie("userToken")
        return res.status(200).json({message: "Logged out successfully."})
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

export const updateById = async(req,res,next)=>{
    
    try{
        const {id} = req.params
        const userToUpdate = req.body
        const foundUser = await User.findByPk(id)
        if (!foundUser){
            return res.status(404).json({ message: 'User not found' });
        }
        foundUser.firstName = userToUpdate.firstName
        foundUser.lastName = userToUpdate.lastName
        foundUser.email = userToUpdate.email
        foundUser.address = userToUpdate.address
        foundUser.city = userToUpdate.city
        foundUser.state = userToUpdate.state
        await foundUser.save();
        res.status(200).json(foundUser)
    }catch (error){
        console.error(error);
        res.status(400).json(error)
    }
}



export const findUsersFavPizza = async (req, res, next) =>{
    try{
        const {userId} = req.params

        const foundUser = await User.findByPk(userId)
        const favPizza = foundUser.pizzas
        console.log("yooooo")
        console.log(favPizza)
        const getAllPizzasByUser = await Pizza.findOne({
            // console.log("yooooooooooo")
            where : {favorite  : true},
            // where : { userId.pizzas.},
            
            include :[
                    {
                        model :  User
                        }
                    
                    
                    ] 
                    
                })
            
        
        res.status(200).json(getAllPizzasByUser)


    }catch (error){
        res.status(400).json({error: 'User has not favorite pizzas '})
    }
}
