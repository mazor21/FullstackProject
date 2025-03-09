import React from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Checkout</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Billing Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Billing Address</h3>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 text-black">Full Name</label>
              <input type="text" id="fullName" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-black">Email Address</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700 text-black">City</label>
              <input type="text" id="city" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
          </div>
          {/* Payment */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Payment</h3>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 text-black">Card Number</label>
              <input type="text" id="cardNumber" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-gray-700 text-black">Expiry Date</label>
              <input type="text" id="expiryDate" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-gray-700 text-black">CVV</label>
              <input type="text" id="cvv" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;