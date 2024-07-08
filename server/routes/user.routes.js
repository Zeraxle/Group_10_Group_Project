import { Router } from "express";

import { createUser, findAllUsers, findUserById, logUserIn,getALLUsersPosts, logOutUser} from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.route("/")
    .get(findAllUsers)
    .post(createUser)
    
userRouter.route("/login")
    .post(logUserIn)

userRouter.route("/userPosts/:userId")
    .get(getALLUsersPosts)

userRouter.route("/:id")
    .get(findUserById)

    logOutUser


userRouter.route("logout/:id")
    .post(logOutUser)
    
export default userRouter
