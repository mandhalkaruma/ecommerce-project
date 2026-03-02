import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";


const CreateProduct = ({ closeModel }) => {

    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [sizes, setSizes] = useState([
        { name: 'S', quantity: 0 },
        { name: 'M', quantity: 0 },
        { name: 'L', quantity: 0 },
        { name: 'XL', quantity: 0 }
    ]);
    const [category, setCategory] = useState('');


    const handleSizeQuantityChange = (index, value) => {
        const newSizes = [...sizes];
        newSizes[index].quantity = value;
        setSizes(newSizes);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(title,description,price,quantity,color,sizes,category,imageURL);

        try {
            const { data } = await axios.post("http://localhost:5000/api/create",
                {
                    title,
                    description,
                    price : Number(price),
                    quantity : Number(quantity),
                    color,
                    sizes,
                    category,
                    imageUrl: imageURL
                }
            );

            if (data.success) {
                toast.success("Product created successfully");
                closeModel(false);
            }
        } catch (error) {
            console.log(error.response?.data);
            toast.error(error.response?.data?.message || "Failed to create product");
        }
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

            <form action="" onSubmit={handleSubmit}>

                {/* MODAL BOX */}
                <div className="w-[90%] md:w-[700px] max-h-[90vh] overflow-y-auto 
      bg-white/10 backdrop-blur-xl border border-white/20
      rounded-2xl shadow-2xl p-8 relative text-white">

                    {/* CLOSE BUTTON */}
                    <button
                        className="absolute top-4 right-5 text-2xl hover:text-red-400 transition"
                        onClick={() => closeModel(false)}
                    >
                        ✖
                    </button>


                    {/* HEADING */}
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Add New Product
                    </h2>

                    {/* IMAGE URL */}
                    <div className="mb-5">
                        <p className="mb-2 font-medium">Product Image URL</p>
                        <input
                            onChange={(e) => setImageURL(e.target.value)} value={imageURL}
                            type="text"
                            placeholder="Paste image URL here"
                            className="w-full p-2 rounded-lg bg-white/10 
            border border-white/20 outline-none
            focus:border-indigo-400"
                        />
                    </div>

                    {/* GRID INPUTS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div>
                            <p className="mb-2 font-medium">Title</p>
                            <input
                                onChange={(e) => setTitle(e.target.value)} value={title}
                                type="text"
                                className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-indigo-400"
                            />
                        </div>

                        <div>
                            <p className="mb-2 font-medium">Price</p>
                            <input
                                onChange={(e) => setPrice(e.target.value)} value={price}
                                type="number" 
                                className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-indigo-400"
                            />
                        </div>

                        <div>
                            <p className="mb-2 font-medium">Quantity</p>
                            <input
                                onChange={(e) => setQuantity(e.target.value)} value={quantity}
                                type="number"
                                className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-indigo-400"
                            />
                        </div>

                        <div>
                            <p className="mb-2 font-medium">Color</p>
                            <input
                                onChange={(e) => setColor(e.target.value)} value={color}
                                type="text"
                                className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-indigo-400"
                            />
                        </div>

                    </div>

                    {/* DESCRIPTION */}
                    <div className="mt-5">
                        <p className="mb-2 font-medium">Description</p>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)} value={description}
                            className="w-full p-2 rounded-lg h-24 bg-white/10 border border-white/20 outline-none focus:border-indigo-400"
                        />
                    </div>

                    <div className="mt-5">
                        <p className="mb-3 font-medium">Sizes</p>

                        <div className="flex flex-wrap gap-4">
                            {sizes.map((size, index) => (
                                <div
                                    key={size.name}
                                    className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2"
                                >
                                    <span className="font-semibold">{size.name}</span>
                                    <input
                                        type="number"
                                        min="0"
                                        className="w-16 p-1 text-center rounded bg-transparent outline-none border border-white/20 focus:border-indigo-400"
                                        value={size.quantity}
                                        onChange={(e) =>
                                            handleSizeQuantityChange(index, Number(e.target.value))
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* CATEGORY */}
                    <div className="mt-5">
                        <p className="mb-2 font-medium">Category</p>
                        <select
                            onChange={(e) => setCategory(e.target.value)} value={category}
                            className="w-full p-2 rounded-lg bg-white/10 text-white border border-white/20 outline-none focus:border-indigo-400"
                        >
                            <option className="bg-[#1e1e2f] text-white" value="">
                                Select Category
                            </option>

                            <option className="bg-[#1e1e2f] text-white" value="women_dresses">
                                Women's Dress
                            </option>

                            <option className="bg-[#1e1e2f] text-white" value="women_gowns">
                                Women's Gowns
                            </option>

                            <option className="bg-[#1e1e2f] text-white" value="women_kurta">
                                Women Kurta
                            </option>

                            <option className="bg-[#1e1e2f] text-white" value="men_kurta">
                                Mens Kurta
                            </option>

                            <option className="bg-[#1e1e2f] text-white" value="men_shirts">
                                Mens Shirt
                            </option>

                            <option className="bg-[#1e1e2f] text-white" value="women_tops">
                                Women Tops
                            </option>

                            <option className="bg-[#1e1e2f] text-white" value="women_lehenga">
                                Lengha Choli
                            </option>

                        </select>
                    </div>

                    {/* BUTTON */}
                    <div className="mt-8 flex justify-center">
                        <button type='submit' className="w-44 h-11 rounded-lg font-semibold
          bg-gradient-to-r from-indigo-600 to-purple-600
          hover:from-indigo-700 hover:to-purple-700 transition">
                            Add Product
                        </button>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default CreateProduct
