import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Right content */}
      <div className="flex flex-col flex-1 min-h-screen text-gray-200 overflow-hidden">
        
        {/* Topbar - FULL WIDTH */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-hidden">
          {children}
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
