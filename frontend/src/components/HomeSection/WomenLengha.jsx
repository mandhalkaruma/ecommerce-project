import React from 'react'

const womenLengha = [
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/krme93k0/lehenga-choli/9/t/e/free-half-sleeve-ghaghra-choli-coconut-original-imag5df5ktsnnypv.jpeg?q=70",
        title: "Embroidered Semi Stitched Lehenga Choli",
        price: "₹1,799"
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/l1fc0i80/lehenga-choli/j/k/t/free-half-sleeve-modak-rama-gajri-dishwa-fashion-original-imagczmhzqmzpyy9.jpeg?q=70",
        title: "Embroidered Semi Stitched Lehenga Choli",
        price: "₹1,799"
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70",
        title: "Embroidered Semi Stitched Lehenga Choli",
        price: "₹3,499"
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/g/0/m/free-sleeveless-zip1434-zinariya-fab-original-imagnftyaaaqjexa.jpeg?q=70",
        title: "Floral Print Semi Stitched Lehenga Choli",
        price: "₹3,099"
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/d/i/u/free-half-sleeve-big-tea-blue-trivety-original-imagnyd8rmf9cjqw.jpeg?q=70",
        title: "Floral Print Semi Stitched Lehenga Choli",
        price: "₹3,099"
    },
];

const WomenLengha = () => {
    return (
        <div className="p-6">

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-6">
                Women's Lehenga
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {womenLengha.map((item, index) => (
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

export default WomenLengha;


