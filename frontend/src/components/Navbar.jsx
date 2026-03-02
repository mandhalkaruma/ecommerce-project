'use client'

import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'

const categories = {
    Women: ['Tops', 'Dresses', 'Gowns', 'Kurta', 'Lehenga'],
    Men: ['Shirts', 'Kurta', 'Jackets', 'Shoes', 'Accessories'],
}

export default function Navbar() {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setIsLoggedIn(true);
        else setIsLoggedIn(false);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsLoggedIn(false);
        navigate('/login');
    }

    return (
        <header className="bg-white shadow">
            {/* Top purple bar */}
            <div className="bg-indigo-600 text-white text-center text-sm font-medium py-2">
                Get free delivery on orders over $100
            </div>

            {/* Main navbar */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Left side: Logo */}
                <div className="flex items-center space-x-8">
                    <div onClick={() => navigate('/')} className="text-2xl font-bold text-indigo-600">Shoppify</div>

                    {/* Menu links */}
                    <nav className="hidden md:flex space-x-6">
                        {['Women', 'Men', 'Contact', 'Stores'].map((link) => (
                            <div key={link} className="relative">
                                {link === 'Women' || link === 'Men' ? (
                                    <Popover className="relative">
                                        {({ open }) => (
                                            <>
                                                <Popover.Button className="flex items-center text-gray-700 hover:text-indigo-600 font-medium">
                                                    {link} <ChevronDownIcon className="ml-1 h-4 w-4" />
                                                </Popover.Button>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Popover.Panel className="absolute z-50 mt-2 w-40 bg-white shadow-lg border border-gray-200 rounded-md py-2">
                                                        {/* {categories[link].map((item) => (
                                                            <a
                                                                key={item}
                                                                href="#"
                                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                            >
                                                                {item}
                                                            </a>
                                                        ))} */}

                                                        {categories[link].map((item) => (
                                                            <p
                                                                key={item}
                                                                onClick={() => {
                                                                    const formattedCategory =
                                                                        link.toLowerCase() +
                                                                        "_" +
                                                                        item.toLowerCase().replace("-", "").replace(" ", "");

                                                                    navigate(`/products/${formattedCategory}`);
                                                                }}
                                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                            >
                                                                {item}
                                                            </p>
                                                        ))}

                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                ) : (
                                    <p
                                        onClick={() => {
                                            if (link === "Contact") navigate("/contact");
                                            else if (link === "Stores") navigate("/stores");
                                        }}
                                        className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer"
                                    >
                                        {link}
                                    </p>

                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-4">
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">
                                Sign in
                            </Link>
                            <Link to="/register" className="text-gray-700 hover:text-indigo-600 font-medium">
                                Create account
                            </Link>
                        </>
                    ) : (
                        <button onClick={handleLogout}
                            className='text-gray-700 hover:text-indigo-600 font-medium'>
                            Logout
                        </button>
                    )}

                    {/* <div className="flex items-center space-x-1">
                        <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt="CAD" className="h-5 w-5" />
                        <span className="text-gray-700 font-medium">CAD</span>
                    </div> */}
                    <button className="text-gray-700 hover:text-indigo-600">
                        <MagnifyingGlassIcon className="h-5 w-5" />
                    </button>
                    <button className="flex items-center text-gray-700 hover:text-indigo-600">
                        <ShoppingBagIcon className="h-5 w-5 mr-1" />
                        0
                    </button>
                </div>
            </div>
        </header>
    )
}
