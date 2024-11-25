import { useEffect, useState } from "react";
import { Product } from "../types/items";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { increment, decrement } from "../store/counter/counterSlice";
import { BsCart2, BsCartCheckFill } from "react-icons/bs";
import { addToCart, removeFromCart } from "../store/cart/cartSlice";
import { fetchProducts } from "../store/product/productThunks";
import { PropagateLoader } from "react-spinners";

const Products = () => {
  const [cartChecked, setCartChecked] = useState<Record<number, boolean>>({});

  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading)
    return (
      <p className="flex justify-center items-center h-screen ">
        <PropagateLoader size={50} />
      </p>
    );
  if (error) return <p>Error:{error}</p>;

  const toggleCartStatus = (product: Product) => {
    const isInCart = !!cartChecked[product.id];

    setCartChecked((prev) => ({
      ...prev,
      [product.id]: !isInCart,
    }));

    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(
        addToCart({
          ...product,
          quantity: count[product.id] || 1,
        })
      );
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-5">Products</h1>
      <div className="mx-16 px-5 mt-5 grid sm:grid-cols-2 lg:grid-cols-3  gap-5 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex gap-5 mb-5 border-b pb-5 flex-col border-black border-2 p-2 rounded-lg items-center"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-[200px] w-[200px] object-contain"
            />
            <div>
              <h1
                className="text-lg font-bold truncate overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  whiteSpace: "normal",
                }}
              >
                {product.title}
              </h1>
              <p className="text-lg text-gray-700">${product.price}</p>
              <p
                className="text-sm text-gray-500 truncate overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  whiteSpace: "normal",
                }}
              >
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-2  ">
                <div className="flex gap-2">
                  <button
                    className="font-medium text-xl border-black rounded-lg border-2 px-2"
                    onClick={() => dispatch(decrement(product.id))}
                  >
                    -
                  </button>
                  <h2 className="font-bold p-2">{count[product.id] || 0}</h2>
                  <button
                    className="font-medium text-xl border-black rounded-lg border-2 px-2"
                    onClick={() => dispatch(increment(product.id))}
                  >
                    +
                  </button>
                </div>
                <div className=" p-2 flex gap-2">
                  <button
                    className="bg-black text-white p-2 rounded-lg"
                    onClick={() => toggleCartStatus(product)}
                    disabled={(count[product.id] || 0) === 0}
                  >
                    {cartChecked[product.id] ? (
                      <BsCartCheckFill className="text-2xl" />
                    ) : (
                      <BsCart2 className="text-2xl" />
                    )}
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
