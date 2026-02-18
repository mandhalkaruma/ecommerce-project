import { FaChartLine } from "react-icons/fa";

const TotalProfit = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400">Total Profit</p>
          <h3 className="text-2xl font-bold text-white mt-1">$25.6k</h3>
          <p className="text-xs text-green-400 mt-1">+12% this month</p>
        </div>

        <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
          <FaChartLine className="text-green-400 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TotalProfit;
