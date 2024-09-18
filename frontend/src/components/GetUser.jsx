import axios from "axios";
import React, { useEffect } from "react";

const GetUser = () => {
  const fetchedData = async () => {
    const response = await axios.get("http://localhost:4000/api/getUser");
    console.log(response);
  };

  useEffect(() => {
    fetchedData();
  }, []);
  return <div>GetUser</div>;
};

export default GetUser;
