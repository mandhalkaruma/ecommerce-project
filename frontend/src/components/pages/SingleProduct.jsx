import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");
    const navigate = useNavigate();

    const getProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/product/${id}`);
            setProduct(res.data.product);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddToCart = async () => {
        if (!selectedSize) {
            toast.error("Please select size");
            return;
        }

        try {

            const { data } = await axios.post("http://localhost:5000/api/cart/add", {
                productId: product._id,
                size: selectedSize,
                quantity: 1
            },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                },
            )

            toast.success("Product added to cart");
            navigate("/cart");

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [id]);

    if (!product) return <h2 className="text-center mt-18">Loading...</h2>


    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="grid grid-cols-2 gap-12">

                {/* LEFT SECTION */}
                <div>
                    {/* Main Image */}
                    <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="w-full h-[450px] object-contain"
                        />
                    </div>

                    {/* Thumbnail Images */}
                    {/* <div className="flex gap-4 mt-4">
                        {[1, 2, 3, 4].map((item, index) => (
                            <div
                                key={index}
                                className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center cursor-pointer hover:border border-indigo-500"
                            >
                                <img
                                    src={product.imageUrl}
                                    className="h-full object-contain"
                                />
                            </div>
                        ))}
                    </div> */}
                </div>


                {/* RIGHT SECTION */}
                <div className="space-y-4">

                    {/* Title */}
                    <h1 className="text-2xl font-semibold text-gray-800">
                        {product.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-500 text-sm">
                        Men Regular Fit Solid Spread Collar Formal Shirt
                    </p>

                    {/* Price Section */}
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-800">
                            ₹{product.price}
                        </span>

                        <span className="line-through text-gray-400">
                            ₹{product.price + 400}
                        </span>

                        <span className="text-green-600 font-semibold">
                            40% Off
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="text-yellow-400 text-lg">
                            ★★★★☆
                        </div>
                        <span className="text-sm text-gray-500">
                            4.2 | 117 Reviews
                        </span>
                    </div>

                    {/* Size Selection */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">
                            Select Size
                        </h3>

                        <div className="flex gap-3">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 border rounded-md transition
                                    ${selectedSize === size
                                            ? "border-indigo-600 bg-indigo-600 text-white"
                                            : "hover:border-indigo-600"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart */}
                    <button
                        onClick={handleAddToCart}
                        className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
                    >
                        ADD TO CART
                    </button>

                    {/* PRODUCT DETAILS */}
                    <div className="pt-6 border-t space-y-4">

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {product.description}
                        </p>

                        {/* Highlights */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2">
                                Highlights
                            </h3>

                            <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                                <li>Hand cut and sewn locally</li>
                                <li>Dyed with proprietary colors</li>
                                <li>Pre-washed & pre-shrunk</li>
                                <li>Ultra-soft 100% cotton fabric</li>
                                <li>Breathable & wrinkle-resistant</li>
                            </ul>
                        </div>
                    </div>

                    {/* RATINGS & REVIEWS */}
                    <div className="pt-8 border-t mt-6">

                        <h2 className="text-lg font-semibold mb-6 text-gray-800">
                            Product Ratings & Reviews
                        </h2>

                        <div className="flex gap-10">

                            {/* LEFT - OVERALL RATING */}
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-5xl font-bold text-green-600">
                                    3.9 ★
                                </h1>
                                <p className="text-sm text-gray-500 mt-2">
                                    211 Ratings,<br />111 Reviews
                                </p>
                            </div>

                            {/* RIGHT - BREAKDOWN */}
                            <div className="flex-1 space-y-3">

                                {/* Excellent */}
                                <div className="flex items-center gap-3">
                                    <span className="w-24 text-sm">Excellent</span>
                                    <div className="flex-1 bg-gray-200 h-2 rounded">
                                        <div className="bg-green-600 h-2 rounded w-[80%]"></div>
                                    </div>
                                    <span className="text-sm">154</span>
                                </div>

                                {/* Very Good */}
                                <div className="flex items-center gap-3">
                                    <span className="w-24 text-sm">Very Good</span>
                                    <div className="flex-1 bg-gray-200 h-2 rounded">
                                        <div className="bg-green-500 h-2 rounded w-[20%]"></div>
                                    </div>
                                    <span className="text-sm">9</span>
                                </div>

                                {/* Good */}
                                <div className="flex items-center gap-3">
                                    <span className="w-24 text-sm">Good</span>
                                    <div className="flex-1 bg-gray-200 h-2 rounded">
                                        <div className="bg-yellow-500 h-2 rounded w-[40%]"></div>
                                    </div>
                                    <span className="text-sm">28</span>
                                </div>

                                {/* Average */}
                                <div className="flex items-center gap-3">
                                    <span className="w-24 text-sm">Average</span>
                                    <div className="flex-1 bg-gray-200 h-2 rounded">
                                        <div className="bg-gray-400 h-2 rounded w-[5%]"></div>
                                    </div>
                                    <span className="text-sm">0</span>
                                </div>

                                {/* Poor */}
                                <div className="flex items-center gap-3">
                                    <span className="w-24 text-sm">Poor</span>
                                    <div className="flex-1 bg-gray-200 h-2 rounded">
                                        <div className="bg-red-500 h-2 rounded w-[15%]"></div>
                                    </div>
                                    <span className="text-sm">20</span>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleProduct;