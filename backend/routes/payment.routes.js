import express from "express";
import { createCheckoutSession } from "../controller/payment.controller.js";


const paymentRouter = express.Router();

paymentRouter.post("/checkout-session", createCheckoutSession);

export default paymentRouter;