import { InvalidSuccessFieldError } from "google-auth-library/build/src/auth/executable-response.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";


export const addToCart = async (req,res) => {
    try {
        const {productId, size, quantity} = req.body;
        const userId = req.userId;

        let cart = await Cart.findOne({user: userId});

        if(!cart) {
            cart = await Cart.create({
                user:userId,
                items:[{product:productId, size, quantity}]
            });
        } else {
            const itemIndex = cart.items.findIndex(
                item =>
                    item.product.toString() === productId && 
                item.size === size
            );

            if(itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({product: productId, size, quantity});
            }

            await cart.save();
        }

        res.json({
            success:true,
            message:"Added to Cart"
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getCart = async (req,res) => {
    try {
        
        const cart = await Cart.findOne({user: req.userId}).populate("items.product");

        if(!cart) {
            return res.json({
                success:true,
                cartData:[]
            });
        }

        const cartItems = cart.items.map(item => ({
            _id: item.product._id,
            title:item.product.title,
            price:item.product.price,
            image: item.product.imageUrl,
            size:item.size,
            quantity: item.quantity
        }));

        res.json({
            success:true,
            cartData: cartItems
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const updateCartQuantity = async (req,res) => {
    try {
        
        const {productId, size, action} = req.body;
        const userId = req.userId;

        const cart = await Cart.findOne({user:userId});

        if(!cart) {
            return res.status(404).json({
                success:false,
                message:"Cart not found"
            });
        }

        const item = cart.items.find(
            item =>
                item.product.toString() === productId &&
            item.size === size
        );

        if(!item) {
            return res.status(404).json({
                success:false,
                message:"Item not found"
            });
        }

        if(action === "inc") {
            item.quantity += 1;
        }

        if(action === "dec") {
            item.quantity -= 1;
            if(item.quantity <= 0) {
                cart.items = cart.items.filter(
                    i =>
                        !(i.product.toString() === productId && i.size === size)
                );
            }
        }

        await cart.save();

        res.json({success:true});

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}