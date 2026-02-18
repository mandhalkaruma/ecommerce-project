import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CreateProduct from "./createProduct";


const Topbar = () => {
  const navigate = useNavigate();
  const [openModel, setOpenModel] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <>

      <header className="w-full flex justify-between items-center px-8 h-16 bg-white/10 backdrop-blur-xl border-b border-white/10">
        <h1 className="font-semibold text-lg">Admin Dashboard</h1>


        <div className="flex items-center gap-5">

          <AiOutlinePlusCircle
            className="text-3xl cursor-pointer hover:text-purple-700"
            onClick={() => setOpenModel(true)}
          />

          <button
            onClick={logout}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Logout
          </button>

        </div>

      </header>

      {openModel && (
        <CreateProduct closeModel={setOpenModel} />
      )}
    </>
  );
};

export default Topbar;
