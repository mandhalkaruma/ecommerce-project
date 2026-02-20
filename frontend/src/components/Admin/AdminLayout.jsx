import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">

      {/* Sidebar */}
      <Sidebar />

      {/* Right content */}
      <div className="flex flex-col flex-1  text-gray-200">

        {/* Topbar - FULL WIDTH */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
