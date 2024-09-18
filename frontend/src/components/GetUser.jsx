import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const GetUser = () => {
  const [data, setData] = useState([]);
  console.log("the data is", data);

  const fetchedData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/getUser");
      setData(response.data.user);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
        All Data of the Students
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="text-left p-4 text-gray-600 font-semibold">
                NAME
              </th>
              <th className="text-left p-4 text-gray-600 font-semibold">
                FATHER NAME
              </th>
              <th className="text-left p-4 text-gray-600 font-semibold">
                E-MAIL
              </th>
              <th className="text-left p-4 text-gray-600 font-semibold">
                PHONE NO
              </th>
              <th className="text-center p-4 text-gray-600 font-semibold">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="p-4 text-gray-700">{user.name}</td>
                  <td className="p-4 text-gray-700">{user.fathername}</td>
                  <td className="p-4 text-blue-500">{user.email}</td>
                  <td className="p-4 text-gray-700">{user.phone}</td>
                  <td className="p-4 flex justify-center gap-4">
                    <FaEdit className="text-blue-500 cursor-pointer" />
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetUser;
