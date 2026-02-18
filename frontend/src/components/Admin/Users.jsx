import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/users");
        console.log("API Response:", response.data);

        // Access the 'users' array inside the response object
        setUsers(response.data.users || []);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <AdminLayout>
      {/* Heading */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 flex items-center justify-center rounded bg-purple-600/20 text-purple-400 font-bold">
          👤
        </div>
        <h2 className="text-lg font-semibold text-gray-200">Users List</h2>
      </div>

      {/* Table */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
        {loading ? (
          <div className="p-4 text-center text-gray-400">Loading users...</div>
        ) : (
          <table className="w-full border-collapse">
            <thead className="bg-white/10 text-gray-300">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-300"> 
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id} className="hover:bg-white/5 transition border-b border-white/10">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{user.firstName} {user.lastName}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role || "User"}</td>
                    <td className="p-3">
                      {user.isBlocked ? (
                        <span className="text-red-500 font-semibold">Blocked</span>
                      ) : (
                        <span className="text-green-500 font-semibold">Active</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
};

export default Users;
