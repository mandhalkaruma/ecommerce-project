import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {

    // const products = [
    //     {
    //         id: 1,
    //         name: "Women Kurta",
    //         category: "Clothing",
    //         price: "₹1,200",
    //         stock: 25,
    //         image: "https://via.placeholder.com/60"
    //     },
    //     {
    //         id: 2,
    //         name: "Men Shirt",
    //         category: "Clothing",
    //         price: "₹900",
    //         stock: 12,
    //         image: "https://via.placeholder.com/60"
    //     },
    //     {
    //         id: 3,
    //         name: "Women Top",
    //         category: "Clothing",
    //         price: "₹750",
    //         stock: 40,
    //         image: "https://via.placeholder.com/60"
    //     },
    //     {
    //         id: 4,
    //         name: "Men Kurta",
    //         category: "Clothing",
    //         price: "₹1,500",
    //         stock: 18,
    //         image: "https://via.placeholder.com/60"
    //     },
    //     {
    //         id: 5,
    //         name: "Women Gown",
    //         category: "Clothing",
    //         price: "₹2,100",
    //         stock: 8,
    //         image: "https://via.placeholder.com/60"
    //     }
    // ];

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products`);
                setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();

    }, [])

    return (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 w-full">

            <h2 className="text-xl font-semibold text-white mb-4">
                Product Listing
            </h2>

            {/* LOCAL SCROLLBAR ONLY */}
            <div className="
                w-full max-h-[420px] overflow-y-auto overflow-x-hidden rounded-lg
      ">
                <div className="min-w-full overflow-x-auto">
                    <table className="min-w-[00px] text-left text-gray-300">

                        <thead className="sticky top-0 bg-[#1c1f3a] z-10">
                            <tr>
                                <th className="p-4">Image</th>
                                <th className="p-4">Title</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Quantity</th>
                                <th className="p-4">Color</th>
                                <th className="p-4">Sizes</th>
                                <th className="p-4">Category</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id} className="border-b border-white/10 hover:bg-white/5 transition">

                                    {/* image */}
                                    <td className="p-4">
                                        <img
                                            src={product.imageUrl}
                                            alt="product"
                                            className="w-14 h-14 rounded-lg object-cover"
                                        />


                                    </td>

                                    {/* title */}
                                    <td className="p-4">{product.title}</td>

                                    <td className="p-4">{product.price}</td>

                                    <td className="p-4">{product.quantity}</td>

                                    <td className="p-4">{product.color}</td>

                                    {/* <td className="p-4">{product.sizes}</td> */}
                                    <td className="p-4">
                                        {
                                            product.sizes
                                                .filter(size => size.quantity > 0)
                                                .map(size => `${size.name}(${size.quantity})`)
                                                .join(", ")
                                        }
                                    </td>
                                    <td className="p-4">{product.category}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
