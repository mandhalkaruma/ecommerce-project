import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    orderItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalItem: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        default: "PENDINg"
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
},{timestamps:true});

const Order = mongoose.model("Order", orderSchema);
export default Order;