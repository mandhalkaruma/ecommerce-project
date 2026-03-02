import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.post('/create', createProduct);
productRouter.get('/products', getAllProducts);
productRouter.get('/product/:id', getSingleProduct);
productRouter.put('/products/:id', updateProduct);
productRouter.delete('/products/:id', deleteProduct);

export default productRouter;