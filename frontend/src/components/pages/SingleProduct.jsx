import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/product/${id}`);
            setProduct(res.data.product);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [id]);

    if(!product) return <h2 className="text-center mt-18">Loading...</h2>


    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="grid grid-cols-2 gap-10">

                {/* LEFT - IMAGE */}
                <div className="bg-white rounded-lg p-5 flex items-center justify-center">
                    <img
                        src={product.imageUrl}
                        className="w-full h-[400px] object-contain"
                    />
                </div>

                {/* RIGHT - DETAILS */}
                <div className="space-y-4">

                    <h2 className="text-2xl font-semibold text-gray-800">
                        {product.title}
                    </h2>

                    <div className="flex items-center gap-2 text-yellow-400">
                        ⭐⭐⭐⭐☆
                    </div>

                    <p className="text-2xl text-indigo-600 font-bold">
                        ₹{product.price}
                    </p>

                    <p className="text-gray-600">
                        {product.description}
                    </p>

                    <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition">
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );
};

export default SingleProduct;