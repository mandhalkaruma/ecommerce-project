import React from 'react'

const mensShirtData = [
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
        title: "Men Printed Pure Cotton Straight Kurta",
        price: 1499
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70",
        title: "Casual Cotton Men's Shirt",
        price: 999
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70",
        title: "Slim Fit Formal Shirt",
        price: 1299
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70",
        title: "Slim Fit Formal Shirt",
        price: 1299
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70",
        title: "Slim Fit Formal Shirt",
        price: 1299
    },
];

const MensShirt = () => {
    return (
        <div className="p-6">

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-6">
                Men's Kurta
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {mensShirtData.map((item, index) => (
                    <div
                        key={index}
                        className="max-w-[240px] w-full rounded-xl shadow hover:shadow-lg transition bg-white p-3"
                    >

                        {/* Image Container */}
                        <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center p-4">

                            <img
                                src={item.imageUrl}
                                alt="shirt"
                                className="w-full h-full object-contain"
                            />

                        </div>

                        {/* Title */}
                        <h3 className="mt-3 font-semibold text-sm">
                            {item.title}
                        </h3>

                        {/* Price */}
                        <p className="text-lg font-bold text-green-600">
                            ₹{item.price}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default MensShirt;


