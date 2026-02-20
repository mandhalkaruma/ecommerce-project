import React, { useState } from 'react'

const CategoryProduct = () => {

    const [openFilter, setOpenFilter] = useState(null);

    const toggleFilter = (filterName) => {
        setOpenFilter(openFilter === filterName ? null : filterName);
    };

    return (
        <div className="flex w-full min-h-screen px-6 py-4">

            {/* LEFT FILTER PANEL */}
            <div className="w-[18%] min-w-[220px] bg-white p-5 rounded-lg shadow-md h-[90vh] overflow-y-auto sticky top-20">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Women Tops
                </h2>


                {/* color filter */}
                <div className="border-b py-3">

                    {/* HEADER */}
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFilter("color")}
                    >
                        <h3 className="text-[16px] font-semibold text-gray-800">Color</h3>
                        <span className="text-lg">
                            {openFilter === "color" ? "-" : "+"}
                        </span>
                    </div>

                    {/* DROPDOWN OPTIONS */}
                    {openFilter === "color" && (
                        <div className="flex flex-col mt-3 space-y-3 text-[15px] text-gray-700">

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-indigo-600"
                                />
                                White
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-indigo-600"
                                />
                                Beige
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-indigo-600"
                                />
                                Blue
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-indigo-600"
                                />
                                Green
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-indigo-600"
                                />
                                Purple
                            </label><label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-indigo-600"
                                />
                                Yello
                            </label>
                        </div>

                    )}

                </div>

                {/* <hr className="my-4" /> */}

                {/* size filter */}
                <div className="border-b py-3">

                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFilter("size")}
                    >
                        <h3 className="text-[16px] font-semibold text-gray-800">Size</h3>
                        <span className="text-lg">
                            {openFilter === "size" ? "-" : "+"}
                        </span>
                    </div>

                    {openFilter === "size" && (
                        <div className="flex flex-col mt-3 space-y-3 text-[15px] text-gray-700">

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
                                S
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
                                M
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
                                L
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
                                XL
                            </label>

                        </div>

                    )}

                </div>

                {/* price filter */}
                <div className="border-b py-3">

                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFilter("price")}
                    >
                        <h3 className="text-[16px] font-semibold text-gray-800">Price</h3>
                        <span className="text-lg">
                            {openFilter === "price" ? "-" : "+"}
                        </span>
                    </div>

                    {openFilter === "price" && (
                        <div className="flex flex-col mt-3 space-y-3 text-[15px] text-gray-700">

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="price" className="w-5 h-5 accent-indigo-600" />
                                ₹159 to ₹399
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="price" className="w-5 h-5 accent-indigo-600" />
                                ₹399 to ₹999
                            </label>

                        </div>
                    )}
                </div>

            </div>

            {/* RIGHT PRODUCT GRID */}
            <div className="w-[75%] pl-6">

                <div className="grid grid-cols-4 gap-6">

                    {/* PRODUCT CARD */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">

                        {/* IMAGE */}
                        <div className="w-full h-64 overflow-hidden">
                            <img
                                src="https://via.placeholder.com/300"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>

                        {/* DETAILS */}
                        <div className="p-3">
                            <h3 className="text-sm font-medium text-gray-800">
                                Men's Kurta
                            </h3>

                            <p className="text-indigo-600 font-semibold mt-1">
                                ₹999
                            </p>
                        </div>

                    </div>

                    {/* COPY THIS CARD MULTIPLE TIMES FOR NOW */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
                        <div className="w-full h-64 overflow-hidden">
                            <img
                                src="https://via.placeholder.com/300"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm font-medium text-gray-800">
                                Women's Top
                            </h3>
                            <p className="text-indigo-600 font-semibold mt-1">
                                ₹799
                            </p>
                        </div>
                    </div>

                </div>

            </div>


        </div>

    )
}

export default CategoryProduct
