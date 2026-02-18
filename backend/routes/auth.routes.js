import express from 'express'
import { getAllUsers, googleAuth, login, register } from '../controller/auth.controller.js';


const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/users', getAllUsers);
authRouter.post("/google", googleAuth);

export default authRouter;