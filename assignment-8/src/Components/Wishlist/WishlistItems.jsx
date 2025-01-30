import { FaDollarSign } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
const WishlistItems = ({ datum,handleRemoveItem }) => {
    const { product_id, product_image, product_title, price, description } = datum;
  return (
    <div className="flex items-center mt-3 shadow-md">
      <img src={product_image} alt="" className="p-3 object-contain" />
      <div className="flex flex-col flex-grow text-left ml-5">
        <h1 className="text-lg font-bold">{product_title}</h1>
        <h1 className="mt-5">
          <span className="text-lg font-semibold">Description:</span> <span className="text-base font-semibold">{description}</span>
        </h1>
        <h1 className="flex items-center text-xl font-medium mt-5">
          Price:
          <FaDollarSign />
          {price}
        </h1>
        <button className="text-left bg-[#9538E2] px-5 py-2 rounded-full max-w-max text-white mt-14 mb-3">Add to Cart</button>
      </div>
      <button
        className="text-red-600 mr-5"
        onClick={() => handleRemoveItem(product_id)}
      >
        <IoIosCloseCircleOutline size={25} />
      </button>
    </div>
  );
};

export default WishlistItems;
