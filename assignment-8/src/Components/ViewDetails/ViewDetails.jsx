import { useContext, useEffect, useState } from "react";
import { SubBannerContext } from "../SubBanner/SubBannerContext";
import { FaDollarSign } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { CartContext } from "../Cart/CartContext";
import { WishlistContext } from "../Wishlist/WishlistContext";

const ViewDetails = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
  const { styles } = useContext(SubBannerContext);
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  useEffect(() => {
    document.title = "ViewDetails"
  },[])
  useEffect(() => {
    if (loaderData && loaderData.product_id) {
      setData(loaderData);
    } else {
      setData({});
    }
  }, [loaderData]);

  const {
    product_id,
    product_image,
    product_title,
    price,
    availability,
    description,
    specification = [],
    rating,
  } = data;

  const integerRating = Math.floor(rating);

  const handleAddToCart = () => {
    if (!cartItems.includes(product_id)) {
      setCartItems([...cartItems, product_id]);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 200);
    }
  };

  const handleAddToWishlist = () => {
    if (!wishlistItems.includes(product_id)) {
      setWishlistItems([...wishlistItems, product_id]);
      setAddedToWishlist(true);
      setTimeout(() => setAddedToWishlist(false), 200); // Reset effect after 200ms
    }
  };

  return (
    <div className="flex flex-col items-center -mt-[232px]">
      <div className={styles.bannerWrapper}>
        <div className={`${styles.content} flex bg-white`}>
          <img
            src={product_image}
            alt=""
            className="object-contain m-3 shadow-lg rounded-lg"
          />
          <div className="flex flex-col text-start pl-3 m-3 shadow-lg rounded-lg">
            <h1 className="text-xl font-bold">{product_title}</h1>
            <p className="flex items-center text-sm font-bold text-gray-600 my-3">
              <span>Price:</span>
              <span>
                <FaDollarSign />
              </span>
              <span>{price}</span>
            </p>
            <span className="my-3">
              {availability ? (
                <p className="w-3/6 border-2 border-green-600 bg-green-300 rounded-2xl text-center text-green-700">
                  In stock
                </p>
              ) : (
                <p className="w-3/6 border-2 border-red-600 bg-red-300 rounded-2xl text-center text-red-700">
                  Out of Stock
                </p>
              )}
            </span>
            <p className="text-base font-medium text-gray-400 mb-3">
              {description}
            </p>
            <p>
              <span className="text-bold font-bold ">Specifications:</span>
              <ol className="list-decimal pl-3 text-base font-medium">
                {specification.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ol>
            </p>
            <p>
              <span className="font-bold text-bold">Ratings:</span>
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <AiFillStar
                      key={idx}
                      className={
                        idx < integerRating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                      size={24}
                    />
                  ))}
                <p className="ml-3 bg-slate-200 text-black font-semibold text-lg px-5 py-1 rounded-2xl shadow-md">
                  {rating}
                </p>
              </div>
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center space-x-4 px-5 py-2 rounded-lg text-white my-3 
                  ${
                    addedToCart
                      ? "bg-green-500 scale-105"
                      : "bg-[#9538E2] hover:scale-105"
                  } transform transition-all duration-200`}
              >
                <span>Add to Cart</span>
                <CiShoppingCart size={23} />
              </button>
              <button
                onClick={handleAddToWishlist}
                className={`${
                  addedToWishlist ? "scale-110 text-red-500" : "text-gray-500"
                } transform transition-all duration-200`}
              >
                <CiHeart size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.topBorder}`} />
        <div className={`${styles.leftBorder} h-[189.6px]`} />
        <div className={`${styles.rightBorder} h-[189.6px]`} />
      </div>
    </div>
  );
};

export default ViewDetails;
