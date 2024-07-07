import Post from "../models/post.model.js";
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
        const { username, password } = req.body
        // SETTING THE VAR ID EQUAL TO PARAMETER WE ENTER INTO OUR ROUTE 
        const isCorrectUsername = await User.findOne({
            where :{username : username}
            })
        if (!isCorrectUsername){
            return res.status(404).json({ errormsg: 'User not found' });
        }
        const isCorrectPassword = isCorrectUsername.authenticate(password)
        if (!isCorrectPassword){
            return res.status(404).json({ errormsg: 'pass not found' });
        }
        
        res.status(200).json(isCorrectUsername)
    }catch (error){
        res.status(400).json(error)
    }
}

export const getALLUsersPosts = async (req, res, next) =>{
    try{
        const {userId} = req.params
        // console.log("yooooo")
        const getAllPostsByUser = await User.findAll({
            // console.log("yooooooooooo")
            where : {id : userId},

            include :[
                {
                model :  Post
                }

            ] 
        })
        res.status(200).json(getAllPostsByUser)


    }catch (error){
        res.status(400).json(error)
    }


}

// .create({ email: 'john.doe@example.com', password: 'SuperSecret!' });
// // { id: 1, email: 'john.doe@example.com', password: '$2a$12$VtyL7j5xx6t/GmmAqy53ZuKJ1nwPox5kHLXDaottN9tIQBsEB3EsW' }

// const user = await User.findOne({ where: { email: 'john.doe@example.com' } });
// user.authenticate('WrongPassword!'); // false
// user.authenticate('SuperSecret!'); // true