import React from 'react'

const womenDress = [
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/x/z/l-na-awd-19-yellow-aarvia-original-imagzffm3bkyzup2.jpeg?q=70",
        title: "Women Bodycon Yellow Dress",
        price: "₹1,799"
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/dress/h/m/h/xl-na-awd-23-yellow-aarvia-original-imagzfs6ykq3z7jw.jpeg?q=70",
        title: "EWomen Bodycon Yellow Dress",
        price: "₹1,799"
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/kt0enww0/dress/2/d/p/xxl-1091-sheetal-associates-original-imag6g4n7qhwesad.jpeg?q=70",
        title: "Women Fit and Flare Yellow Dress",
        price: "₹3,499"
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/dress/f/z/y/l-aa-00153-yellow-aayu-original-imagz848vwz3hsgm.jpeg?q=70",
        title: "Women A-line Yellow Dress",
        price: "₹3,099"
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/l51d30w0/dress/h/a/w/xl-j0433-dr-janasya-original-imagfsu9ghjsjhgz.jpeg?q=70",
        title: "Women Fit and Flare Yellow Dress",
        price: "₹3,099"
    },
];

const WomenDress = () => {
    return (
        <div className="p-6">

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-6">
                Women's Dress
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {womenDress.map((item, index) => (
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

export default WomenDress;


