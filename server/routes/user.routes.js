import { Router } from "express";

import { createUser, findAllUsers, findUserById, logUserIn,getALLUsersPosts} from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.route("/")
    .get(findAllUsers)
    .post(createUser)
    
userRouter.route("/username")
    .post(logUserIn)

userRouter.route("/userPosts/:userId")
    .get(getALLUsersPosts)

userRouter.route("/:id")
    .get(findUserById)
    
export default userRouter
