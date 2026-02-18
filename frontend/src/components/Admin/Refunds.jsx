import { FaUndoAlt } from "react-icons/fa";

const Refunds = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400">Refunds</p>
          <h3 className="text-2xl font-bold text-white mt-1">$1.2k</h3>
          <p className="text-xs text-red-400 mt-1">-3% this month</p>
        </div>

        <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
          <FaUndoAlt className="text-red-400 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Refunds;
