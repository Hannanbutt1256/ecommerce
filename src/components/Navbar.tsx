import { Link, NavLink } from "react-router-dom";
import { BsCart2, BsBag } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close menu when window is resized to >= 768px
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  return (
    <div className="flex justify-between items-center mt-5 mx-16 px-5">
      <div>
        <h1 className="text-2xl font-bold">Shopify</h1>
      </div>
      <div className="hidden md:flex">
        <input
          type="text"
          name="search"
          placeholder="Search Products..."
          className="border-2 border-black rounded-xl px-2 py-1 outline-none"
        />
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-5">
          <NavLink to="/">
            <li className="relative group  py-2 ">
              <AiOutlineHome className="text-2xl" />
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mb-2 
                 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 
                 group-hover:opacity-100 transition-opacity"
              >
                Home
              </div>
            </li>
          </NavLink>
          <NavLink to="/products">
            <li className="relative group  py-2 ">
              <BsBag className="text-2xl" />
              <div className="absolute left-1/2 transform -translate-x-1/2 mb-2 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Products
              </div>
            </li>
          </NavLink>
          <NavLink to="/cart">
            <li className="relative group py-2 ">
              <BsCart2 className="text-2xl " />
              <div className="absolute left-1/2 transform -translate-x-1/2 mb-2 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Cart
              </div>
            </li>
          </NavLink>
          <NavLink to="/auth/login">
            <li className="  py-2">Login</li>
          </NavLink>
          <NavLink to="/auth/register">
            <li className=" bg-black text-white px-3 py-2 rounded-xl hover:bg-opacity-80">
              Register
            </li>
          </NavLink>
        </ul>
      </div>
      <button onClick={toggleMenu} className="md:hidden">
        {isMenuOpen ? (
          <AiOutlineClose className="text-2xl" />
        ) : (
          <AiOutlineMenu className="text-2xl" />
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-5">
          <div className="flex justify-between items-center">
            <Link to="/">
              <h1>Shopify</h1>
            </Link>
            <button className="md:hidden" onClick={toggleMenu}>
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search Products..."
              className="border border-black rounded-xl px-2 py-1 mt-5 outline-none"
            />
          </div>
          <ul className="flex flex-col gap-5 mt-5 p-2">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleMenu}>
                Cart
              </Link>
            </li>
            <Link to="">
              <li>Login</li>
            </Link>
            <Link to="">
              <li>Register</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
