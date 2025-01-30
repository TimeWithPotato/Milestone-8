import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "./WishListContext";
import WishlistItems from "./WishlistItems";
import { useLoaderData, useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Wishlist"
  },[])

  useEffect(() => {
    const mappedData = wishlistItems.map((product_id, idx) => {
      return loaderData.find((product) => product.product_id === product_id);
    });

    setData(mappedData);
  }, [loaderData, wishlistItems]);

  const handleRemoveItem = (product_id) => {
    setData((prevData) =>
      prevData.filter((product) => product?.product_id !== product_id)
    );
  };
  const handleNavigateTo = () => {
    navigate("/home/all");
  };
  console.log(wishlistItems);
  return (
    <div>
      <h1 className="text-lg font-bold text-[#9538E2] text-left">Wishlist</h1>
      <div className="grid grid-cols-1 gap-4">
        {data.map((datum, idx) => (
          <WishlistItems
            key={idx}
            datum={datum}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
        {!data.length && (
          <div className="flex justify-center mt-10 items-center min-h-min">
            <button
              className="bg-[#039fbe] px-5 py-2 text-center w-56 text-white rounded-lg text-lg font-bold"
              onClick={handleNavigateTo}
            >
              Make your wishlist right now!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
