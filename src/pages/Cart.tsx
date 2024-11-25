import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeFromCart, clearCart } from "../store/cart/cartSlice";
import { BsTrash } from "react-icons/bs";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-16 px-5 mt-5 ">
      <h2 className="text-xl font-bold">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b-2 shadow-md p-2"
              >
                <img src={item.images[0]} alt={item.title} className="w-16" />
                <span className="p-2 w-56">{item.title}</span>
                <span className="p-2">x{item.quantity}</span>
                <span className="p-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="text-red-600 p-2"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <BsTrash className="text-xl" />
                </button>
              </li>
            ))}
          </ul>
          <button
            className="bg-red-600 text-white px-4 py-2 mt-4"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
