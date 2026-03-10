import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CheckoutSteps from "./CheckoutSteps";
import { useNavigate } from "react-router-dom";

const AddressCard = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [mobile, setMobile] = useState("");

    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getCart = async () => {
            const token = localStorage.getItem("token");

            const res = await axios.get("http://localhost:5000/api/cart/get", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCartItems(res.data.cartData);
        }

        getCart();

    }, [])

    const handleData = async (e) => {
        e.preventDefault();

        const data = { firstName, lastName, address, city, state, zipCode, mobile };

        try {
            const token = localStorage.getItem("token");

            // save address
            const addressRes = await axios.post("http://localhost:5000/api/addresses", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });


            const addressId = addressRes.data.newAddress._id;

            // create order
            const orderItems = cartItems?.map((item) => item._id);

            const totalPrice = cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );

            const totalItem = cartItems.length;

            const orderRes = await axios.post(
                "http://localhost:5000/api/order/create",
                {
                    orderItems,
                    shippingAddress: addressId,
                    totalPrice,
                    totalItem
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const orderId = orderRes.data.order._id;
            toast.success("Order created");

            navigate(`/order_summary/${orderId}`);

        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">

            {/* Progress Steps */}

            <CheckoutSteps step1={true} step2={true} step3={false} step4={false} />

            {/* Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left Side (Cart Preview Placeholder) */}
                <div className="bg-white rounded-lg shadow-sm p-6 min-h-[450px]">
                    {/* Later you can show cart items here */}
                </div>

                {/* Right Side (Address Form) */}
                <form onSubmit={handleData}>
                    <div className="bg-white rounded-lg shadow-sm p-6">

                        <h2 className="text-lg font-semibold mb-6">Delivery Address</h2>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input
                                onChange={(e) => setFirstName(e.target.value)} value={firstName}
                                type="text"
                                placeholder="First Name *"
                                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input
                                onChange={(e) => setLastName(e.target.value)} value={lastName}
                                type="text"
                                placeholder="Last Name *"
                                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <textarea
                            onChange={(e) => setAddress(e.target.value)} value={address}
                            rows="4"
                            placeholder="Address *"
                            className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input
                                onChange={(e) => setCity(e.target.value)} value={city}
                                type="text"
                                placeholder="City *"
                                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input
                                onChange={(e) => setState(e.target.value)} value={state}
                                type="text"
                                placeholder="State/Province/Region *"
                                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <input
                                onChange={(e) => setZipCode(e.target.value)} value={zipCode}
                                type="text"
                                placeholder="Zip / Postal code *"
                                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input
                                onChange={(e) => setMobile(e.target.value)} value={mobile}
                                type="text"
                                placeholder="Phone Number *"
                                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition duration-200">
                            DELIVER HERE
                        </button>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddressCard;