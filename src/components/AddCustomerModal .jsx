import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddCustomerModal = ({ closeModal, addCustomerToTable }) => {
  const [customerData, setCustomerData] = useState({
    customerName: '',
    phoneNumber: '',
    salesOrder: '', // Add missing field
    lastPurchaseDate: '',
    loyaltyPoints: 0,
    activeStatus: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCustomer = () => {
    if (customerData.customerName && customerData.phoneNumber) {
      const newCustomer = {
        id: new Date().getTime(),
        customerName: customerData.customerName,
        phoneNumber: customerData.phoneNumber,
        salesOrder: customerData.salesOrder, // Add missing field
        lastPurchaseDate: customerData.lastPurchaseDate,
        loyaltyPoints: parseInt(customerData.loyaltyPoints) || 0,
        activeStatus: customerData.activeStatus,
      };

      addCustomerToTable(newCustomer);
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      className="fixed inset-0 overflow-y-auto"
      overlayClassName="fixed inset-0 z-40 backdrop-filter"
    >
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
          Add New Customer
        </h3>
        <form>
          <div className="mb-4">
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              id="customerName"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={customerData.customerName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={customerData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="salesOrder" className="block text-sm font-medium text-gray-700">
              Sales Order
            </label>
            <input
              type="text"
              name="salesOrder"
              id="salesOrder"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={customerData.salesOrder}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastPurchaseDate" className="block text-sm font-medium text-gray-700">
              Last Purchase Date
            </label>
            <input
              type="date"
              name="lastPurchaseDate"
              id="lastPurchaseDate"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={customerData.lastPurchaseDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="loyaltyPoints" className="block text-sm font-medium text-gray-700">
              Loyalty Points
            </label>
            <input
              type="number"
              name="loyaltyPoints"
              id="loyaltyPoints"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={customerData.loyaltyPoints}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Active Status
            </label>
            <input
              type="checkbox"
              name="activeStatus"
              id="activeStatus"
              className="mt-1 p-2 border border-gray-300 rounded"
              checked={customerData.activeStatus}
              onChange={() => setCustomerData((prevData) => ({ ...prevData, activeStatus: !prevData.activeStatus }))}
            />
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              onClick={handleAddCustomer}
            >
              Save and Close
            </button>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-gray-500"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

AddCustomerModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addCustomerToTable: PropTypes.func.isRequired,
};

export default AddCustomerModal;
