'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
    const [current, setCurrent] = useState(0)

    const homeCarouselData = [
        {
            image: "https://www.ethnicplus.in/cdn/shop/files/6_be99af2e-b5ea-4b64-8681-9a1579539350.jpg?v=1768755970&width=2000",
            path: "/women/clothing/lengha_choli"
        },
        {
            image: "https://www.ethnicplus.in/cdn/shop/files/4_2f2042d1-33c3-4f2c-8397-472e103fefb0.jpg?v=1768755972&width=2000",
            path: "/women/clothing/women_dress"
        },
        {
            image: "https://www.ethnicplus.in/cdn/shop/files/5_0b7f45e4-22aa-435b-80e7-bd7d0e5d991f.jpg?v=1768755964&width=2000",
            path: "/women/clothing/women_saree"
        },
        {
            image: "https://www.ethnicplus.in/cdn/shop/files/3-Picsart-AiImageEnhancer_3c603fa9-4237-4aef-823a-f0e63637e894.jpg?v=1768755967&width=2000",
            path: "/women/clothing/women_jacket"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % homeCarouselData.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[480px] overflow-hidden">
            {/* Images */}
            {homeCarouselData.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {homeCarouselData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                            index === current
                                ? 'bg-indigo-600 scale-110'
                                : 'bg-gray-300 hover:bg-indigo-400'
                        }`}
                    />
                ))}
            </div>
            
        </div>
    )
}
