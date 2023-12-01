import React, { useState } from "react";
import Modal from "../components/AddOrderModal";
import { ListFilter } from "lucide-react";
import { Pencil } from "lucide-react";

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dummyEntries, setDummyEntries] = useState([
    {
      id: 1,
      item_img:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item_name: "Sneakers",
      pur_price: "$100",
      sell_price: "$150",
      Onhand_units: "50",
      sold_units: "100",
      total_units: "150",
      dt_updated: "25-11-2023",
    },
    {
      id: 2,
      item_img:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item_name: "Smart Watch",
      pur_price: "$200",
      sell_price: "$250",
      Onhand_units: "80",
      sold_units: "110",
      total_units: "190",
      dt_updated: "25-11-2023",
    },
    {
      id: 4,
      item_img:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item_name: "Laptop",
      pur_price: "$1200",
      sell_price: "$1500",
      Onhand_units: "25",
      sold_units: "50",
      total_units: "75",
      dt_updated: "25-11-2023",
    },
    {
      id: 5,
      item_img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item_name: "DSLR Camera",
      pur_price: "$800",
      sell_price: "$1000",
      Onhand_units: "15",
      sold_units: "30",
      total_units: "45",
      dt_updated: "25-11-2023",
    },

    {
      id: 6,
      item_img:
        "https://plus.unsplash.com/premium_photo-1661317306727-64c7a1339a6c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwa2l0Y2hlbiUyMHdpdGglMjBzdGFpbmxlc3MlMjBzdGVlbCUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D",
      item_name: "Refrigerator",
      pur_price: "$800",
      sell_price: "$1000",
      Onhand_units: "40",
      sold_units: "60",
      total_units: "100",
      dt_updated: "25-11-2023",
    },

    {
      id: 7,
      item_img:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item_name: "Washing Machine",
      pur_price: "$600",
      sell_price: "$750",
      Onhand_units: "20",
      sold_units: "30",
      total_units: "50",
      dt_updated: "25-11-2023",
    },

    {
      id: 8,
      item_img:
        "https://images.unsplash.com/photo-1630329273801-8f629dba0a72?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9sZGVkJTIwY2xvdGhzfGVufDB8fDB8fHww",
      item_name: "T-Shirt",
      pur_price: "$20",
      sell_price: "$30",
      Onhand_units: "100",
      sold_units: "150",
      total_units: "250",
      dt_updated: "25-11-2023",
    },

    {
      id: 9,
      item_img:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item_name: "Jeans",
      pur_price: "$40",
      sell_price: "$50",
      Onhand_units: "80",
      sold_units: "120",
      total_units: "200",
      dt_updated: "25-11-2023",
    },
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProductToTable = (newProduct) => {
    setDummyEntries((prevEntries) => [...prevEntries, newProduct]);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEntries = dummyEntries.filter((entry) => {
    const matchSearchTerm =
      entry.item_img.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.item_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.pur_price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.sell_price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.Onhand_units.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.sold_units.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.total_units.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.dt_updated.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedOption === "all") {
      return matchSearchTerm;
    } else if (selectedOption === "approved") {
      return entry.status === "Approved" && matchSearchTerm;
    } else if (selectedOption === "pending") {
      return entry.payment === "Pending" && matchSearchTerm;
    }
    return matchSearchTerm;
  });

  return (
    <div className="w-full h-[88vh] p-10">
      <div className="flex items-center justify-between pb-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">Inventory Management</h1>
          <select
            className=" p-2  border border-gray-300 rounded"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="all">All items</option>
            <option value="approved">Electronics</option>
            <option value="approved">Clothing</option>
            <option value="pending">Home and Living</option>
          </select>
          <button className=" ml-8 w-4 h-4 mb-8">
            <Pencil className="inline mr-2 w-4 h-4" />
            <span className="flex justify-center font-semibold text-lg">Edit</span>
          </button>
        </div>
        <div className="flex items-center">
          {/* Add New Product button linked to modal */}
          <button
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={openModal}
          >
            Add New Product
          </button>
          {/* Active search bar */}
          <input
            type="text"
            placeholder="Search for items"
            className="p-2 border border-gray-300 rounded focus:ring focus:border-blue-300"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Display invalid search term message */}
      {searchTerm && filteredEntries.length === 0 && (
        <p className="text-red-500">
          No matching orders found for "{searchTerm}".
        </p>
      )}

      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                {/* Add checkbox for selection if needed */}
              </div>
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Item Image
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Item Name
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Purchasing Price
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Selling Price
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              On-hand Units
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Sold Units
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Total Units
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Date Updated
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Render dummy entries */}
          {filteredEntries.map((entry) => (
            <tr key={entry.id}>
              <td className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </td>
              <td className="flex flex-1 px-6 py-3 border-b border-gray-300">
                <img src={entry.item_img} alt="item-image" height={80} width={80}/>
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.item_name}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.pur_price}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.sell_price}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.Onhand_units}
              </td>
              <td className="px-6 py-3 border-b border-gray-300 text-center">
                {entry.sold_units}
              </td>{" "}
              {/* Center alignment for the Amount column */}
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.total_units}
              </td>
              <td className="px-6 py-3 border-b border-gray-300">
                {entry.dt_updated}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding new product */}
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          addProductToTable={handleAddProductToTable}
        />
      )}
    </div>
  );
};

export default Orders;
