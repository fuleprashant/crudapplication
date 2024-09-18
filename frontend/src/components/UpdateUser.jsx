import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const { id } = useParams();
  // console.log(id);
  const [data, setData] = useState({
    name: "",
    fathername: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleClick = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:4000/api/updateUser/${id}`,
        data
      );
      console.log(response);
      if (response.data.success) {
        toast.success("User created successfully");
      }
      navigate("/");
    } catch (error) {
      toast.error("Error creating user");
    }
  };

  const fetchSingleUserData = async () => {
    const responce = await axios.get(
      `http://localhost:4000/api/getsingleUser/${id}`
    );
    console.log(responce);
    setData(responce.data.singleUser);
  };

  useEffect(() => {
    fetchSingleUserData();
  }, [id]);

  return (
    <>
      <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Fill in the User Data
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.name}
                onChange={handleClick}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="fathername"
              >
                Father's Name
              </label>
              <input
                type="text"
                id="fathername"
                placeholder="Enter your father's name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.fathername}
                onChange={handleClick}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.email}
                onChange={handleClick}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.phone}
                onChange={handleClick}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
