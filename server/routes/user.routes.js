import { Router } from "express";

import { createUser, findAllUsers, findUserById, logUserIn,getALLUsersPosts, logOutUser, updateById} from "../controllers/user.controller.js";

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

userRouter.route("/update/:id")
    .post(updateById)


userRouter.route("logout/:id")
    .post(logOutUser)
    
export default userRouter
