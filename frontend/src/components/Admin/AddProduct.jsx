import React, { useState } from 'react';
import AdminLayout from './AdminLayout'; // your existing sidebar layout

const productCategories = [
    'Women Dress',
    'Women Gowns',
    'Women Kurta',
    'Mens Kurta',
    'Mens Shirt',
    'Women Tops'
];

const AddProductUI = () => {
    const [imageURL, setImageURL] = useState(null);
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

    return (
        <AdminLayout>
            <div className="flex justify-center mt-8">
                <div className="w-full max-w-4xl p-8 md:p-12 
      bg-white/5 backdrop-blur-lg border border-white/10 
      rounded-xl shadow-xl text-gray-200">

                    <h2 className="text-3xl font-bold mb-8 text-center text-white">
                        Add New Product
                    </h2>

                    {/* Image Upload */}
                    <div className="mb-6">
                        <p className="font-semibold mb-2">Product Image URL</p>
                        {/* <label htmlFor="image" className="cursor-pointer">
                            <div className="h-32 w-32 border-2 border-dashed border-white/20 
            flex items-center justify-center rounded-lg overflow-hidden
            hover:border-indigo-400 transition">
                                {image ? (
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="preview"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <span className="text-gray-400 text-sm">Click to upload</span>
                                )}
                            </div>
                            <input
                                type="file"
                                hidden
                                id="image"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </label> */}

                        <input type="text" placeholder='Paste image URL' className='w-full p-2 rounded bg-white/10 
            border border-white/20 outline-none
            focus:border-indigo-400'
                            value={imageURL} onChange={(e) => setImageURL(e.target.value)}
                        />

                        {imageURL && (
                            <div className='mt-4 h-32 w-32 border-2 border-white/20 rounded-lg overflow-hidden'>
                                <img
                                    src={imageUrl}
                                    alt="preview"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        )}
                    </div>

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Title */}
                        <div>
                            <p className="font-semibold mb-2">Product Title</p>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="w-full p-2 rounded bg-white/10 
              border border-white/20 outline-none
              focus:border-indigo-400"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <p className="font-semibold mb-2">Price</p>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full p-2 rounded bg-white/10 
              border border-white/20 outline-none
              focus:border-indigo-400"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                min={0}
                            />
                        </div>

                        {/* Quantity */}
                        <div>
                            <p className="font-semibold mb-2">Quantity</p>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full p-2 rounded bg-white/10 
              border border-white/20 outline-none
              focus:border-indigo-400"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                min={0}
                            />
                        </div>

                        {/* Color */}
                        <div>
                            <p className="font-semibold mb-2">Color</p>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="w-full p-2 rounded bg-white/10 
              border border-white/20 outline-none
              focus:border-indigo-400"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <p className="font-semibold mb-2">Description</p>
                        <textarea
                            placeholder="Type Here"
                            className="w-full p-2 rounded bg-white/10 
            border border-white/20 outline-none
            focus:border-indigo-400 h-24"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Sizes */}
                    <div className="mt-6">
                        <p className="font-semibold mb-2">Sizes</p>
                        <div className="flex gap-6 flex-wrap">
                            {sizes.map((size, index) => (
                                <div key={size.name} className="flex items-center gap-2">
                                    <span className="font-medium">{size.name}</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="w-16 p-1 rounded bg-white/10 
                  border border-white/20 outline-none text-center
                  focus:border-indigo-400"
                                        value={size.quantity}
                                        onChange={(e) =>
                                            handleSizeQuantityChange(index, Number(e.target.value))
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Category */}
                    <div className="mt-6">
                        <p className="font-semibold mb-2">Category</p>
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 rounded bg-white/10 
            border border-white/20 outline-none
            focus:border-indigo-400"
                        >
                            <option value="">Select category</option>
                            {productCategories.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit */}
                    <div className="mt-10 flex justify-center">
                        <button className="w-44 h-11 rounded-lg font-semibold text-white
          bg-gradient-to-r from-indigo-600 to-purple-600
          hover:from-indigo-700 hover:to-purple-700
          transition">
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
        </AdminLayout>
    
    );
};

export default AddProductUI;
