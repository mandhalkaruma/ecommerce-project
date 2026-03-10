import express from 'express';
import cors from 'cors';
import 'dotenv/config.js'
import connectDB from './config/db.js';
import productRouter from './routes/product.routes.js';
import authRouter from './routes/auth.routes.js';
import contactRouter from './routes/admin/contact.routes.js';
import taskRouter from './routes/admin/task.routes.js';
import cartRouter from './routes/cart.routes.js';
import addressRouter from './routes/address.routes.js';
import orderRouter from './routes/order.routes.js';


await connectDB();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use("/api", productRouter);
app.use('/contact', contactRouter);
app.use('/api/v1', taskRouter);
app.use("/api/cart", cartRouter);
app.use("/api/addresses", addressRouter);
app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
    res.json("Hello Api is running")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})