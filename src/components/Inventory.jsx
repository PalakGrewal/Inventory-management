import React from "react";
import TableInventory from "./TableInventory";
import { FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { ListFilter } from "lucide-react";

const Inventory = () => {
  return (
    <section className="inventory h-[88vh] overflow-y-scroll p-10 w-full">
      <div>
      <h2 className="flex flex-1 justify-start text-4xl font-bold">Inventory Management</h2>
      </div>
      <div className="flex flex-1 mt-20">
        <input
          type="text"
          placeholder="Search Word"
          className="p-4 border-4 rounded border-color-black "
        />
        <button type="submit" className="text-2xl pl-3 ">Search</button>
      </div>
      <div>
        <ul className="list-style-type: none padding-left: 0 mt-10">
          <li className="mb-2 inline mr-8">
            <ListFilter className="inline mr-2 w-4 h-4" />
            Filter
          </li>
          <li className="mb-2 inline mr-8">
            <FaPlus className="inline mr-1 w-4 h-4" />
            New Item
          </li>
          <li className="mb-2 inline mr-8">
            <FaPencil className="inline mr-2 w-4 h-4" />
            Edit
          </li>
        </ul>
      </div>
      <div>
        <TableInventory />
      </div>
    </section>
  );
};

export default Inventory;
