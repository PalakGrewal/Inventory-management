import React from "react";
import { ListFilter} from 'lucide-react';
import { Plus } from 'lucide-react';
import { Pencil } from 'lucide-react';
import TableInventory from './TableInventory'

const Inventory = () => {
  return (
    <section className="inventory h-[88vh] overflow-y-scroll p-10 w-full">
      <div>
        <input type="text" placeholder="Search Word" />
        <button type="submit">Search</button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-16">
          INVENTORY
        </h2>
        <ul className="list-style-type: none padding-left: 0 mt-10">
          <li className="mb-2 inline mr-8"><ListFilter className="inline mr-2 w-4 h-4"/>Filter</li>
          <li className="mb-2 inline mr-8"><Plus className="inline mr-1 w-4 h-4"/>New Item</li>
          <li className="mb-2 inline mr-8"><Pencil className="inline mr-2 w-4 h-4"/>Edit</li>
        </ul>
      </div>
      <div>
          <TableInventory/>
      </div>
    </section>
  );
};

export default Inventory;
