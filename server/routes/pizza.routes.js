import { Router } from "express";
import { createPizza ,findFavPizza} from "../controllers/pizza.controller.js";

export const pizzaRouter = Router()

pizzaRouter.route("/")
    .post (createPizza)
    // .get(findFavPizza)