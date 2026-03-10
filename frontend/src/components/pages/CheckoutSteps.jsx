import React from "react";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <div className="relative flex items-center justify-between mb-12">
            {/* Background Line */}
            <div className="absolute top-4 left-0 right-0 h-[2px] bg-gray-300 z-0"></div>

            {/* Active line */}
            <div
                className={`absolute top-4 left-0 h-[2px] bg-purple-600 z-0`}
                style={{ width: `${((step1 ? 1 : 0) + (step2 ? 1 : 0) + (step3 ? 1 : 0) + (step4 ? 1 : 0) - 1) * 33.33}%` }}
            ></div>

            {/* Step 1 */}
            <div className={`relative z-10 flex flex-col items-center ${step1 ? "text-purple-600" : "text-gray-400"}`}>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${step1 ? "bg-purple-600 text-white" : "border-2 border-gray-400"}`}>
                    {step1 ? "✓" : 1}
                </div>
                <span className="mt-2 text-sm font-medium">Login</span>
            </div>

            {/* Step 2 */}
            <div className={`relative z-10 flex flex-col items-center ${step2 ? "text-purple-600" : "text-gray-400"}`}>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${step2 ? "bg-purple-600 text-white" : "border-2 border-gray-400"}`}>
                    {step2 ? "✓" : 2}
                </div>
                <span className="mt-2 text-sm font-medium">Delivery Address</span>
            </div>

            {/* Step 3 */}
            <div className={`relative z-10 flex flex-col items-center ${step3 ? "text-purple-600" : "text-gray-400"}`}>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${step3 ? "bg-purple-600 text-white" : "border-2 border-gray-400"}`}>
                    {step3 ? "✓" : 3}
                </div>
                <span className="mt-2 text-sm">Order Summary</span>
            </div>

            {/* Step 4 */}
            <div className={`relative z-10 flex flex-col items-center ${step4 ? "text-purple-600" : "text-gray-400"}`}>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${step4 ? "bg-purple-600 text-white" : "border-2 border-gray-400"}`}>
                    {step4 ? "✓" : 4}
                </div>
                <span className="mt-2 text-sm">Payment</span>
            </div>
        </div>
    );
};

export default CheckoutSteps;