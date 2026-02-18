import React from 'react'

const womenTopData = [
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/ky1vl3k0/t-shirt/f/u/6/m-2co-w-regular-must-blk-young-trendz-original-imagadhfgte57e67.jpeg?q=70",
        title: "Pack of 2 Women Solid Round Neck Pure Cotton White, Bla...",
        price: 1499
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/shopsy-top/l/3/f/l-shopsytee-sofia-white-dream-beauty-fashion-original-imagkmdhh7sdxyhg.jpeg?q=70",
        title: "Casual Cotton Men's Shirt",
        price: 999
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/ke1pnrk0/top/p/p/z/xl-tttp003846-tokyo-talkies-original-imafutjsuhhacuev.jpeg?q=70",
        title: "Slim Fit Formal Shirt",
        price: 1299
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/1/d/2/s-3813-the-dry-state-original-imagcfh833gdjeem-bb.jpeg?q=70",
        title: "Slim Fit Formal Shirt",
        price: 1299
    },
    {
        imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/top/u/z/r/xxl-1-amrpuffsleevecoffeegoldtop-aishu-fabric-original-imagr3zvntgfa3s8.jpeg?q=70",
        title: "Party Regular Sleeves Floral Print, Printed Women White...",
        price: 1299
    },
];

const WomenTop = () => {
    return (
        <div className="p-6">

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-6">
                Women's Top
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {womenTopData.map((item, index) => (
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

export default WomenTop;


