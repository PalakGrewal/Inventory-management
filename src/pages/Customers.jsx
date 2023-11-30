
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { IoMdPrint } from "react-icons/io";
import AddCustomerModal from "../components/AddCustomerModal ";

const Customers = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Customer List",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });

  const [customerEntries, setCustomerEntries] = useState([
    {
      id: 1,
      salesOrder: "SO001",
      customerName: "John Doe",
      phoneNumber: "123-456-7890",
      lastPurchaseDate: "2023-01-15",
      loyaltyPoints: 100,
      Active_Status: true,
    },
    {
      id: 2,
      salesOrder: "SO002",
      customerName: "Jane Smith",
      phoneNumber: "987-654-3210",
      lastPurchaseDate: "2023-02-10",
      loyaltyPoints: 75,
      Active_Status: true,
    },
    {
      id: 3,
      salesOrder: "SO003",
      customerName: "Alice Johnson",
      phoneNumber: "555-123-4567",
      lastPurchaseDate: "2023-03-05",
      loyaltyPoints: 50,
      Active_Status: false,
    },
    {
      id: 4,
      salesOrder: "SO004",
      customerName: "Bob Anderson",
      phoneNumber: "777-888-9999",
      lastPurchaseDate: "2023-04-20",
      loyaltyPoints: 120,
      Active_Status: true,
    },
    {
      id: 5,
      salesOrder: "SO005",
      customerName: "Eva Martinez",
      phoneNumber: "444-333-2222",
      lastPurchaseDate: "2023-05-12",
      loyaltyPoints: 90,
      Active_Status: true,
    },
    {
      id: 6,
      salesOrder: "SO006",
      customerName: "Michael Brown",
      phoneNumber: "666-555-4444",
      lastPurchaseDate: "2023-06-25",
      loyaltyPoints: 80,
      Active_Status: false,
    },
    {
      id: 7,
      salesOrder: "SO007",
      customerName: "Sophia Garcia",
      phoneNumber: "222-111-0000",
      lastPurchaseDate: "2023-07-08",
      loyaltyPoints: 110,
      Active_Status: true,
    },
    {
      id: 8,
      salesOrder: "SO008",
      customerName: "David Lee",
      phoneNumber: "999-000-1111",
      lastPurchaseDate: "2023-08-30",
      loyaltyPoints: 60,
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

  const handleAddCustomerToTable = (newCustomer) => {
    setCustomerEntries((prevEntries) => [...prevEntries, newCustomer]);
  };

  return (
    <div className="h-[88vh] overflow-y-scroll p-10 w-full" ref={componentRef}>
      <div className="flex justify-end pb-8">
        <button
          className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handlePrint}
        >
          <IoMdPrint className="inline" /> Customer List
        </button>
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={openModal}
        >
          Add New Customer
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Customer ID
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
          {customerEntries.map((customer) => (
            <tr key={customer.id}>
              <td className="px-6 py-3 border-b border-gray-300">
                {customer.id}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {customer.customerName}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {customer.salesOrder}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {customer.phoneNumber}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {customer.lastPurchaseDate}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {customer.loyaltyPoints}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {customer.activeStatus ? "Active" : "Inactive"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <AddCustomerModal
          closeModal={closeModal}
          addCustomerToTable={handleAddCustomerToTable}
        />
      )}
    </div>
  );
};

export default Customers;
// Customers.js

// import React, { useState, useRef, useEffect } from "react";
// import { useReactToPrint } from "react-to-print";
// import { IoMdPrint } from "react-icons/io";
// import AddCustomerModal from "../components/AddCustomerModal ";

// const Customers = () => {
//   const componentRef = useRef();

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: "Customer List",
//     onAfterPrint: () => console.log("Printed PDF successfully!"),
//   });

//   const [customerEntries, setCustomerEntries] = useState(() => {
//     const storedData = localStorage.getItem("customerEntries");
//     return storedData
//       ? JSON.parse(storedData)
//       : [
//           {
//             id: 1,
//             salesOrder: "SO001",
//             customerName: "John Doe",
//             phoneNumber: "123-456-7890",
//             lastPurchaseDate: "2023-01-15",
//             loyaltyPoints: 100,
//             activeStatus: true,
//           },
//           // Add more initial data as needed
//         ];
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("customerEntries", JSON.stringify(customerEntries));
//   }, [customerEntries]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleAddCustomerToTable = (newCustomer) => {
//     setCustomerEntries((prevEntries) => [...prevEntries, newCustomer]);
//   };

//   return (
//     <div className="h-[88vh] overflow-y-scroll p-10 w-full" ref={componentRef}>
//       <div className="flex justify-end pb-8">
//         <button
//           className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
//           onClick={handlePrint}
//         >
//           <IoMdPrint className="inline" /> Customer List
//         </button>
//         <button
//           className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//           onClick={openModal}
//         >
//           Add New Customer
//         </button>
//       </div>
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3 border-b border-gray-300">
//               Customer ID
//             </th>
//             <th scope="col" className="px-6 py-3 border-b border-gray-300">
//               Customer Name
//             </th>
//             <th scope="col" className="px-6 py-3 border-b border-gray-300">
//               Sales Order
//             </th>
//             <th scope="col" className="px-6 py-3 border-b border-gray-300">
//               Phone Number
//             </th>
//             <th scope="col" className="px-6 py-3 border-b border-gray-300">
//               Last Purchase Date
//             </th>
//             <th scope="col" className="px-6 py-3 border-b border-gray-300">
//               Loyalty Points
//             </th>
//             <th scope="col" className="px-6 py-3 border-b border-gray-300">
//               Active Status
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {customerEntries.map((customer) => (
//             <tr key={customer.id}>
//               <td className="px-6 py-3 border-b border-gray-300">
//                 {customer.id}
//               </td>
//               <td className="px-6 py-3 border-b border-gray-300">
//                 {customer.customerName}
//               </td>
//               <td className="px-6 py-3 border-b border-gray-300">
//                 {customer.salesOrder}
//               </td>
//               <td className="px-6 py-3 border-b border-gray-300">
//                 {customer.phoneNumber}
//               </td>
//               <td className="px-6 py-3 border-b border-gray-300">
//                 {customer.lastPurchaseDate}
//               </td>
//               <td className="px-6 py-3 border-b border-gray-300">
//                 {customer.loyaltyPoints}
//               </td>
//               <td className="px-6 py-3 border-b border-gray-300">
//                 {customer.activeStatus ? "Active" : "Inactive"}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {isModalOpen && (
//         <AddCustomerModal
//           closeModal={closeModal}
//           addCustomerToTable={handleAddCustomerToTable}
//         />
//       )}
//     </div>
//   );
// };

// export default Customers;
