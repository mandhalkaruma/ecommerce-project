import express from "express";
import { addaddress, getUserAddress } from "../controller/address.controller.js";
import authMiddleware from "../middleware/auth.js";

const addressRouter = express.Router();

addressRouter.post("/", authMiddleware, addaddress)
addressRouter.get("/", authMiddleware, getUserAddress);

export default addressRouter;