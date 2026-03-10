import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {

    const navigate = useNavigate();

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>

            <div className='bg-white shadow-lg rounded-xl w-[350px] overflow-hidden'>

                {/* green success section */}
                <div className='bg-green-600 text-white flex flex-col items-center justify-center py-12'>

                    {/* tick animation */}
                    <div className='w-20 h-20 rounded-full bg-white flex items-center justify-center animate-bounce'>
                        <svg 
                        className='w-10 h-10 text-green-600'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth="3"
                        viewBox='0 0 24 24'
                        >
                            <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    <h2 className='mt-4 text-xl font-semibold'>Payment Successful</h2>

                    <p className='text-2xl font-bold mt-2'>₹1420</p>

                </div>

                {/* bottom section */}
                <div className='p-6 text-center text-gray-600'>

                    <p className='text-sm'>
                        Your order has been placed successfully
                    </p>

                    <button
                    onClick={() => navigate("/orders")}
                    className='mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded'
                    >View Orders</button>

                </div>
            </div>

        </div>
    )
}

export default PaymentSuccess
