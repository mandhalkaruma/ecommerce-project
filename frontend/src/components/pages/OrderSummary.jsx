import React, { useEffect, useState } from "react";
import CheckoutSteps from "./CheckoutSteps";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const OrderSummary = () => {

  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const stripePromise = loadStripe("pk_test_51RSMiRQryrfmx3QyjRqBNH7WBErjsH7RpqD3nIAxuNCZRNjWfikCTXtsqHQP6GKVuG0EKV4qAOe54Ie9BeNGBqrl00gfHThPli");

  const handlePayment = async () => {

    const stripe = await stripePromise;

    const { data } = await axios.post(
      "http://localhost:5000/api/payment/checkout-session",
      { amount: order.totalPrice }
    );

    window.location.href = data.url;
  };

  const getOrder = async () => {
    try {

      const token = localStorage.getItem("token");

      const { data } = await axios.get(`http://localhost:5000/api/order/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log(data);
      setOrder(data.order);

    } catch (error) {
      console.log(error);
    }
  }

  const getCart = async () => {
    try {

      const token = localStorage.getItem("token");

      const { data } = await axios.get("http://localhost:5000/api/cart/get",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(data);
      setCartItems(data.cartData || []);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
    getOrder();
  }, []);

  // subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const shipping = subtotal > 500 ? 0 : 50;

  const total = subtotal + shipping;


  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <CheckoutSteps step1 step2 step3 step4={false} />

      <button className="text-sm text-gray-600 mb-4">BACK</button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-5">

          {/* ADDRESS CARD */}

          {order && (
            <div className="bg-white p-5 rounded-lg shadow">

              <p className="font-semibold">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}
              </p>

              <p className="text-sm text-gray-600">
                {order.shippingAddress.address}{" "}
                {order.shippingAddress.city}{" "}
                {order.shippingAddress.state}{" "}
                {order.shippingAddress.zipCode}
              </p>

              <p className="text-sm mt-2">
                <span className="font-semibold">Phone Number</span>{" "}
                {order.shippingAddress.mobile}
              </p>

            </div>
          )}


          {/* CART ITEMS */}
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow flex gap-4"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">

                <h3 className="font-medium text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  Size: {item.size}
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>

                <div className="text-sm mt-1">

                  <span className="line-through text-gray-400 mr-2">
                    ₹{item.price * item.quantity}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE PRICE CARD */}
        <div className="bg-white p-5 rounded-lg shadow h-fit">

          <h2 className="text-gray-700 font-semibold mb-4">
            PRICE DETAILS
          </h2>

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Price ({cartItems.length} items)</span>
              <span>₹{subtotal}</span>
            </div>


            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">{shipping === 0 ? "Free" : `${shipping}`}</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-base">
              <span>Total Amount</span>
              <span className="text-green-700">
                ₹{total}
              </span>
            </div>

          </div>

          <button
          onClick={handlePayment}
           className="w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
            PAYMENT
          </button>

        </div>

      </div>
    </div>
  );
};

export default OrderSummary;