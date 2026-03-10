import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";

const Cart = () => {

    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const updateQuantity = async (productId, size, action) => {
        try {
            console.log("Clicked: ",productId, size, action );
            const token = localStorage.getItem("token");

            await axios.put(
                "http://localhost:5000/api/cart/update",
                {productId, size, action},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setCartItems(prev =>
                prev.map(item => {
                    if(item._id === productId && item.size === size) {
                        return {
                            ...item,
                            quantity:
                                action === "inc"
                                ? item.quantity + 1
                                : item.quantity - 1
                        };
                    }
                    return item;
                })
                .filter(item => item.quantity > 0)
            );

        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    useEffect(() => {
        const getCart = async () => {

            try {
                const token = localStorage.getItem("token");

                const res = await axios.get("http://localhost:5000/api/cart/get", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log(res.data.cartData);
                setCartItems(res.data.cartData || []);
            } catch (error) {
                console.log(error.response?.data || error.message);
            } finally {
                setLoading(false)
            }
        };

        getCart();
    }, [])

    if (loading) {
        return <div className="text-center mt-20">Loading Cart...</div>
    }
    if (cartItems.length === 0) {
        return <div className="text-center mt-20">Your cart is empty!</div>
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 gap-8">
            {/* LEFT SIDE */}
            <div className="col-span-2 space-y-5">

                {cartItems.map((item) => (
                    <div key={item._id} className="flex gap-4 bg-white p-4 rounded-lg shadow">

                        <img src={item.image} className="w-28 h-28 object-contain" />

                        <div className="flex-1 space-y-1">

                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-500">Size: {item.size}</p>
                            {/* <p className="text-sm text-gray-500">Seller: {item.seller}</p> */}

                            <div className="flex items-center gap-2 mt-2">
                                <span className="font-semibold">₹{item.price}</span>
                                {/* <span className="line-through text-gray-400 text-sm">₹{item.oldPrice}</span> */}
                                <span className="text-green-600 text-sm">40% off</span>
                            </div>

                            <div className="flex items-center gap-3 mt-3">

                                {/* Decrease */}
                                <button 
                                onClick={()=>updateQuantity(item._id, item.size, "dec")}
                                className="w-8 h-8 flex items-center justify-center 
                       rounded-full border border-gray-300 
                       hover:bg-purple-100 transition">
                                    <FiMinus size={14} />
                                </button>

                                {/* Quantity */}
                                <span className="w-8 text-center font-medium">
                                    {item.quantity}
                                </span>

                                {/* Increase */}
                                <button
                                onClick={()=>updateQuantity(item._id, item.size, "inc")}
                                className="w-8 h-8 flex items-center justify-center 
                                    rounded-full border border-gray-300 
                                    hover:bg-purple-100 transition">
                                    <FiPlus size={14} />
                                </button>

                            </div>

                            <button className="text-purple-600 text-sm mt-2">REMOVE</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white p-5 rounded-lg shadow h-fit">

                <h2 className="font-semibold mb-4">PRICE DETAILS</h2>
                <div className="flex justify-between text-sm mb-2">
                    <span>Price ({cartItems.length} item)</span>
                    <span>₹{totalAmount}</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                    <span>Discount</span>
                    <span className="text-green-600">-₹0</span>
                </div>

                <div className="flex justify-between text-sm mb-4">
                    <span>Delivery Charges</span>
                    <span className="text-green-600">Free</span>
                </div>

                <hr />
                <div className="flex justify-between font-semibold mt-4">
                    <span>Total Amount</span>
                    <span>₹{totalAmount}</span>
                </div>

                <button onClick={()=>navigate("/checkout")} className="mt-6 w-full bg-purple-600 text-white py-3 rounded-md">
                    CHECK OUT
                </button>
            </div>
        </div>
    );
};

export default Cart;