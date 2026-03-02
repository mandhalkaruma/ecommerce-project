import { FaShoppingCart, } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ProductGrid = ({ products = [] }) => {

  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-6">

        {products.map((product) => (

          <div
            key={product._id}
            onClick={()=> navigate(`/product/${product._id}`)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
          >

            <div className="w-full h-64 bg-white flex items-center justify-center">
              <img
                src={product.imageUrl}
                className="w-full h-full object-contain p-2 transition duration-300"
              />
            </div>


            <div className="p-3 space-y-2">
              <h3 className="text-sm font-medium text-gray-800">
                {product.title}
              </h3>

              <div className="flex items-center justify-between">
                <p className="text-indigo-600 font-semibold">
                  ₹{product.price}
                </p>

                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 text-sm font-medium">
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

export default ProductGrid;