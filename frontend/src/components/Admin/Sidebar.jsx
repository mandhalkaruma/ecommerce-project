import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaBoxOpen, FaShoppingCart, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  // const linkClass = ({ isActive }) =>
  //   `p-3 rounded cursor-pointer
  //    hover:bg-indigo-100
  //    ${isActive ? "bg-indigo-50 border-r-4 border-indigo-600 text-indigo-600" : ""}
  //   `;

  const linkClass = ({ isActive }) =>
  `p-3 rounded-lg transition flex items-center gap-3
   hover:bg-purple-600/20
   ${isActive ? "bg-purple-600/30 text-purple-400" : ""}
  `;

  return (
    <aside className="w-64 h-screen sticky top-0 bg-[#0b1020] text-gray-300 shadow-xl">
      <div className="p-6 text-2xl text-center font-bold text-purple-400 tracking-wide">
        Shoppify
      </div>

      <nav className="flex flex-col gap-1 px-2 white">
        <NavLink to="/admin/dashboard" className={linkClass}>
          <MdDashboard size={20}/>
          Dashboard
        </NavLink>

        <NavLink to="/admin/products" className={linkClass}>
          <FaBoxOpen size={20}/>
          Add Products
        </NavLink>

        <NavLink to="/admin/orders" className={linkClass}>
        <FaShoppingCart size={20}/>
          Orders
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
        <FaUsers size={20}/>
          Users
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
