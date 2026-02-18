import { FaArrowUp } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";


const TotalEarning = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col justify-between">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">
          Total Earning
        </h3>
        <span className="text-green-400 text-sm flex items-center gap-1">
          <FaArrowUp className="text-xs" /> 10%
        </span>
      </div>

      {/* Amount */}
      {/* <div className="mt-6">
        <h2 className="text-3xl font-bold text-white">
          $24,895
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Compared to $84,325 last year
        </p>
      </div> */}

      {/* Amount + Icon */}
      <div className="mt-6 flex justify-between items-center">

        <div>
          <h2 className="text-3xl font-bold text-white">
            $24,895
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Compared to $84,325 last year
          </p>
        </div>

        <div className="w-18 h-18 rounded-lg bg-green-500/20 flex items-center justify-center">
          <FaWallet className="text-green-400 text-2xl" />
        </div>

      </div>


      {/* Categories */}
      <div className="mt-6 space-y-4">

        {/* Men */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-white">
              Men
            </p>
            <p className="text-xs text-gray-400">
              Clothing, Footwear
            </p>
          </div>
          <p className="text-sm font-semibold text-white">
            $24,895.65
          </p>
        </div>

        {/* Women */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-white">
              Women
            </p>
            <p className="text-xs text-gray-400">
              Accessories
            </p>
          </div>
          <p className="text-sm font-semibold text-white">
            $18,249.55
          </p>
        </div>

      </div>
    </div>
  );
};

export default TotalEarning;
