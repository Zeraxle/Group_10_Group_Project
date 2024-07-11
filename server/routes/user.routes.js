import { Router } from "express";

import { createUser, findAllUsers, findUserById, logUserIn, logOutUser, updateById, findUsersFavPizza, getALLUsersPizzas} from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.route("/")
    .get(findAllUsers)
    .post(createUser)
    
userRouter.route("/login")
    .post(logUserIn)

userRouter.route("/userPizzas/:userId")
    .get(findUsersFavPizza)

userRouter.route("/allUsersPizzas/:userId")
    .get(getALLUsersPizzas)

userRouter.route("/:id")
    .get(findUserById)

userRouter.route("/update/:id")
    .post(updateById)


userRouter.route("/logout/:id")
    .post(logOutUser)
    
export default userRouter
