import { GiConfirmed } from "react-icons/gi";
const Modal = ({ isModalOpen, onClose, onConfirm, totalCost }) => {
    if (!isModalOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 h-auto text-center">
      <div className="bg-white rounded-lg max-w-sm w-full p-6">
        <div className="flex justify-center">
          <GiConfirmed size={40} className="text-green-600" />
        </div>
        <div>
          <h1 className="text-lg font-bold mb-3">Confrim Payment</h1>
          <hr />
        </div>
        <div className="mt-3">
          <p className="font-bold text-bold">Pay: {totalCost}</p>
        </div>
        <div className="flex justify-around mt-3">
          <button onClick={onConfirm} className={`${totalCost === 0 ? 'disabled bg-gray-500 text-white' : 'bg-green-500 text-white'} px-5 py-2  text-lg font-bold rounded-lg`}>Pay</button>
          <button onClick={onClose} className="bg-red-600 px-5 py-2 text-white text-lg font-bold rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
