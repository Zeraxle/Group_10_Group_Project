import { Router } from "express";
import { createPizza } from "../controllers/pizza.controller.js";

export const pizzaRouter = Router()

pizzaRouter.route("/")
    .post (createPizza)