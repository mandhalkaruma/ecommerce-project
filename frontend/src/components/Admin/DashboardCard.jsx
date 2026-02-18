import { FaTrophy } from "react-icons/fa";

const DashboardCard = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex justify-between items-center">
      
      {/* Left Content */}
      <div>
        <h3 className="text-lg font-semibold">Shop With Shopify</h3>
        <p className="text-sm text-gray-400 mt-1">
          Congratulations <span role="img">🎉</span>
        </p>

        <h2 className="text-3xl font-bold text-indigo-400 mt-4">
          420.8k
        </h2>

        <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium transition">
          VIEW SALES
        </button>
      </div>

      {/* Right Icon */}
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-500/20">
        <FaTrophy className="text-4xl text-indigo-400" />
      </div>

    </div>
  );
};

export default DashboardCard;
