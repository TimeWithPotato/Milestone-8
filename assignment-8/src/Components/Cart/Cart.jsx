import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import CartItems from "./CartItems";
import { ImSortAmountDesc } from "react-icons/im";
import { ImSortAmountAsc } from "react-icons/im";
import Modal from "../Modal/Modal";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);
  const [descOrder, setDescOrder] = useState(true);
  const [totalCost, setTotalCost] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cart"
  },[])
  useEffect(() => {
    const mappedData = cartItems.map((item, idx) => {
      return loaderData.find((product) => product.product_id === item);
    });
    setData(mappedData);
  }, [cartItems, loaderData]);

  useEffect(() => {
    const total = data.reduce((sum, product) => sum + (product?.price), 0);
    setTotalCost(total);
  },[data])

  const handleRemoveItem = (product_id) => {
    setData((prevData) =>
      prevData.filter((product) => product?.product_id !== product_id)
    );
  };

  const handleNavigateTo = () => {
    navigate("/home/all");
  };

  const handleSortBy = () => {
    const sortedData = [...data].sort((a, b) => {
      return descOrder ? a.price - b.price : b.price - a.price;
    });
    setData(sortedData);
    setDescOrder(!descOrder);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const handleConfirmPurchase = () => {
    setData([]);
    setTotalCost(0);
    setIsModalOpen(false)
    navigate("/home/all");
  };

  const handleCancelPurchase = () => {
    setIsModalOpen(false)
  };
  // const {product_image,product_title, price, description} = data
  // console.log(data);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg font-bold ml-3">Cart</h1>
        <div className="flex items-center justify-between space-x-8 shadow-lg px-5 py-2 rounded-md">
          <h1 className="text-lg font-semibold">Total cost : {totalCost}</h1>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full p-1"
            onClick={handleSortBy}
          >
            <span className="flex items-center justify-between w-full bg-white rounded-full text-[#8332C5]  px-5 py-2">
              Sort By
              <span>
                {descOrder ? (
                  <ImSortAmountDesc className="mt-2 ml-2" size={25} />
                ) : (
                  <ImSortAmountAsc className="mt-2 ml-2" size={25} />
                )}
              </span>
            </span>
          </button>
          <button
            className="bg-gradient-to-r from-[#6497b1] to-[#005b96] px-5 py-2 rounded-full text-white text-lg font-medium"
            onClick={handlePurchase}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {data.map((datum, idx) => (
          <CartItems
            key={idx}
            datum={datum}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
        {!data.length && (
          <div className="flex justify-center mt-10 items-center min-h-min">
            <button
              className="bg-[#039fbe] px-5 py-2 text-center w-32 text-white rounded-lg"
              onClick={handleNavigateTo}
            >
              Let's Buy..!
            </button>
          </div>
        )}
      </div>
      {/* Modallllllllllllllllll */}
      <div>
        {isModalOpen ? (
          <Modal
            isModalOpen={isModalOpen}
            onClose={handleCancelPurchase}
            onConfirm={handleConfirmPurchase}
            totalCost={totalCost}
          />
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Cart;
