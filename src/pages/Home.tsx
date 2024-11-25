import React from "react";
import { useNavigate } from "react-router-dom";
import ecom from "../assets/ecom.jpg";
const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mx-20  mt-5 h-screen bg-cover bg-center flex items-center justify-center object-cover "
      style={{ backgroundImage: `url(${ecom})`, objectFit: "contain" }}
    >
      <button
        onClick={() => navigate("/products")}
        className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Browse All Products
      </button>
    </div>
  );
};

export default Home;
