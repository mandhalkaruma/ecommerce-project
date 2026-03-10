import express from "express";
import authMiddleware from "../middleware/auth.js";
import { createOrder, getAllOrders, getSingleOrder } from "../controller/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/create", authMiddleware, createOrder);
orderRouter.get("/:id", authMiddleware, getSingleOrder);
orderRouter.get("/", authMiddleware, getAllOrders);

export default orderRouter;