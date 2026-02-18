import AdminLayout from "./AdminLayout";
import { FaBoxOpen, FaShoppingCart, FaUsers, FaDollarSign } from "react-icons/fa";
import DashboardCard from "./DashboardCard";
import WeeklyOverview from "./WeeklyOverview";
import TotalEarning from "./TotalEarning";
import TotalProfit from "./TotalProfit";
import Refunds from "./Refunds";
import ProductList from "./ProductList";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="w-full space-y-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard />

          {/* Monthly Overview */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:col-span-2 w-full">
            <h3 className="text-lg font-semibold text-white mb-1">
              Monthly Overview
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Total 48.5% growth 😎 this month
            </p>

            <div className="grid grid-cols-4 gap-6 mt-6">

              {/* Customers */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <FaUsers className="text-indigo-400 text-3xl" />
                </div>
                <div>
                  <p className="text-base text-gray-400">Customers</p>
                  <h4 className="text-xl font-bold text-white">1.2k</h4>
                </div>
              </div>

              {/* Products */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <FaBoxOpen className="text-orange-400 text-2xl" />
                </div>
                <div>
                  <p className="text-base text-gray-400">Products</p>
                  <h4 className="text-xl font-bold text-white">320</h4>
                </div>
              </div>

              {/* Sales */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <FaShoppingCart className="text-green-400 text-2xl" />
                </div>
                <div>
                  <p className="text-base text-gray-400">Sales</p>
                  <h4 className="text-xl font-bold text-white">890</h4>
                </div>
              </div>

              {/* Revenue */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <FaDollarSign className="text-yellow-400 text-2xl" />
                </div>
                <div>
                  <p className="text-base text-gray-400">Revenue</p>
                  <h4 className="text-xl font-bold text-white">₹4.5L</h4>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Analytics Section */}
        <div className="space-y-6 mb-8">

          {/* TOP ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <WeeklyOverview />
            <TotalEarning />
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <TotalProfit />
            <Refunds />
            <TotalProfit />
            <Refunds />
          </div>
        </div>

        <ProductList />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
