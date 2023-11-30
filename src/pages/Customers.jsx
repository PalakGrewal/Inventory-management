import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { IoMdPrint } from "react-icons/io";
import Modal from '../components/AddCustomerModal ';
const Customers = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Customer List",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });

  const [dummyEntries, setDummyEntries] = useState([
    {
      Customer_Id: 1,
      Sales_Order: "SO001",
      Customer_Name: "John Doe",
      Phone_Number: "123-456-7890",
      Last_Purchase_Date: "2023-01-15",
      Loyalty_Points: 100,
      Active_Status: true,
    },
    {
      Customer_Id: 2,
      Sales_Order: "SO002",
      Customer_Name: "Jane Smith",
      Phone_Number: "987-654-3210",
      Last_Purchase_Date: "2023-02-10",
      Loyalty_Points: 75,
      Active_Status: true,
    },
    {
      Customer_Id: 3,
      Sales_Order: "SO003",
      Customer_Name: "Alice Johnson",
      Phone_Number: "555-123-4567",
      Last_Purchase_Date: "2023-03-05",
      Loyalty_Points: 50,
      Active_Status: false,
    },
    {
      Customer_Id: 4,
      Sales_Order: "SO004",
      Customer_Name: "Bob Anderson",
      Phone_Number: "777-888-9999",
      Last_Purchase_Date: "2023-04-20",
      Loyalty_Points: 120,
      Active_Status: true,
    },
    {
      Customer_Id: 5,
      Sales_Order: "SO005",
      Customer_Name: "Eva Martinez",
      Phone_Number: "444-333-2222",
      Last_Purchase_Date: "2023-05-12",
      Loyalty_Points: 90,
      Active_Status: true,
    },
    {
      Customer_Id: 6,
      Sales_Order: "SO006",
      Customer_Name: "Michael Brown",
      Phone_Number: "666-555-4444",
      Last_Purchase_Date: "2023-06-25",
      Loyalty_Points: 80,
      Active_Status: false,
    },
    {
      Customer_Id: 7,
      Sales_Order: "SO007",
      Customer_Name: "Sophia Garcia",
      Phone_Number: "222-111-0000",
      Last_Purchase_Date: "2023-07-08",
      Loyalty_Points: 110,
      Active_Status: true,
    },
    {
      Customer_Id: 8,
      Sales_Order: "SO008",
      Customer_Name: "David Lee",
      Phone_Number: "999-000-1111",
      Last_Purchase_Date: "2023-08-30",
      Loyalty_Points: 60,
      Active_Status: true,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleAddProductToTable = (newProduct) => {
    setDummyEntries((prevEntries) => [...prevEntries, newProduct]);
  };

  return (
    <div className="h-[88vh] overflow-y-scroll p-10 w-full" ref={componentRef}>
      <div className="flex flex-1 justify-start text-4xl font-bold">
        <h1>All Customers</h1>
      </div>
      <div className="flex justify-end pb-8">
        {" "}
        <button
          className="py-1 px-2  bg-red-400 rounded hover:bg-red-500"
          onClick={handlePrint}
        >
          <IoMdPrint className="inline" /> Customer List
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Customer_Id
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Sales Order
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Last Purchase Date
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Loyalty Points
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Active Status
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Render dummy entries */}
          {dummyEntries.map((entry) => (
            <tr key={entry.Customer_Id}>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.Customer_Id}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.Customer_Name}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.Sales_Order}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.Phone_Number}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.Last_Purchase_Date}
              </td>
              <td className="px-6 py-3 border-b border-gray-300 text-center">
                {entry.Loyalty_Points}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.Active_Status ? "Active" : "Inactive"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <Modal closeModal={closeModal} addProductToTable={handleAddProductToTable}/>}
 
    </div>
  );
};

export default Customers;
