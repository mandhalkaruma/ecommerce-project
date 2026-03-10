import React, { useEffect, useState } from 'react'
import { FiChevronRight } from "react-icons/fi";
import axios from 'axios';

const Order = () => {

    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
            
            const {data} = await axios.get(
                "http://localhost:5000/api/order/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            console.log(data);

            if(data.success) {
                setOrders(data.orders);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getOrders();
    },[])

    return (
        <div className='max-w-3xl mx-auto mt-10 bg-white shadow rounded-lg'>

            {orders.length === 0 && (
                <p className='text-center p-4 text-gray-500'>You have no orders yet.</p>
            )}
            
            {orders.map((order) => (
                <div
                key={order._id}
                className='flex items-center justify-between p-4 border-b hover:bg-gray-50 cursor-pointer'
                >

                    {/* left section */}
                    <div className='flex gap-4 items-center'>

                        <img src={order.orderItems[0]?.product?.images[0]} alt="product" 
                        className='w-16 h-16 object-cover rounded'
                        />

                        <div>
                            <h3 className='font-semibold text-gray-600'>
                                Order ID: {order._id.slice(-6)}
                            </h3>

                            <p className='text-sm text-gray-500'>
                                Ordered On: {new Date(order.createdAt).toDateString()}
                            </p>

                            <p className='text-sm text-gray-500'>
                                Items: {order.orderItems.length} • Total: ₹{order.totalPrice}
                            </p>

                            <p className='text-sm text-gray-500'>
                                Shipping: {order.shippingAddress ? order.shippingAddress.address : "Not provided"}
                            </p>
                        </div>
                    </div>

                    {/* right arrow */}
                    <FiChevronRight className='text-gray-400'/>
                </div>
            ))}
        </div>
    )
}

export default Order
