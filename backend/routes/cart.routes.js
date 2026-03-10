import express from "express";
import { addToCart, getCart, updateCartQuantity } from "../controller/cart.controller.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware, addToCart);
cartRouter.get("/get",authMiddleware, getCart);
cartRouter.put("/update",authMiddleware, updateCartQuantity)

export default cartRouter;