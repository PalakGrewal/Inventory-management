import React, { useState, useEffect } from 'react';

const AddOrderModal = ({ closeModal }) => {
  const [orderData, setOrderData] = useState({
    // Initialize with empty data fields
    date: '',
    salesOrder: '',
    reference: '',
    customerName: '',
    status: '',
    amount: '',
    invoice: '',
    payment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddOrder = () => {
    // Add your logic to handle adding a new order
    // For simplicity, you can just log the data for now
    console.log('Adding order:', orderData);
    closeModal(); // Close the modal after adding order
  };

  useEffect(() => {
    // Add any additional initialization logic here
  }, []);

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
              Add New Order
            </h3>
            {/* Form for adding a new order */}
            <form>
              {/* ... Input fields for order details */}
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={handleAddOrder}
                >
                  Add Order
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrderModal;
