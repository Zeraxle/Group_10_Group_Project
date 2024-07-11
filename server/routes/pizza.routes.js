import { Router } from "express";
import { createPizza , findPizzaById} from "../controllers/pizza.controller.js";

export const pizzaRouter = Router()

pizzaRouter.route("/")
    .post (createPizza)

pizzaRouter.route("/:id")
    .get(findPizzaById)