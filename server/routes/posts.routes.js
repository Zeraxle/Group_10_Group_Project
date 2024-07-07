import { findAllPosts, createPost, findPostById, updateById, deleteById,JoinPostByUser} from "../controllers/post.controller.js";
import { Router } from "express";

const postRouter = Router()

postRouter.route("/")
    .get(findAllPosts)
    .post(createPost)

postRouter.route("/post/:userId")
    .get(JoinPostByUser)
    
    
postRouter.route("/:id")
    .get(findPostById)
    .put(updateById)
    .delete(deleteById)


    export default postRouter