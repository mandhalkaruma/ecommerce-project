import Order from "../models/order.model.js";


export const createOrder = async (req,res) => {
    try {
        
        const {orderItems, shippingAddress, totalPrice, totalItem} = req.body;

        if(!orderItems || orderItems.length === 0) {
            return res.status(400).json({
                success:false,
                message:"No order items"
            });
        }

        const order = await Order.create({
            user:req.userId,
            orderItems,
            shippingAddress,
            totalPrice,
            totalItem
        });

        res.status(201).json({
            success:true,
            message:"Order created successfully",
            order
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:"Order creation failed",
            error:error.message
        })
    }
}

export const getAllOrders = async (req,res) => {
    try {
        
        const orders = await Order.find({user:req.userId})
        .populate("shippingAddress")
        .populate("orderItems.product")
        .sort({createdAt: -1});

        if(orders.length === 0) {
            return res.status(404).json({
                success:true,
                orders:[],
                message:"No orders found"
            });
        }

        res.status(200).json({
            success:true,
            orders
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

// getting single order
export const getSingleOrder = async (req,res) => {
    try {
        
        const order = await Order.findById(req.params.id)
        .populate("shippingAddress")
        .populate("orderItems.product");

        if(!order) {
            return res.status(404).json({
                success:false,
                message:"Order not found"
            });
        }

        res.status(200).json({
            success:true,
            order
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}