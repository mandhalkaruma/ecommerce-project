import express from 'express';
import { createMsg, getAllMsg } from '../../controller/admin/contact.controller.js';

const contactRouter = express.Router();

contactRouter.post('/create', createMsg);
contactRouter.get('/', getAllMsg);

export default contactRouter;