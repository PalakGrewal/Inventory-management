import React from "react";
import { ListFilter} from 'lucide-react';
import { Plus } from 'lucide-react';
import { Pencil } from 'lucide-react';
import TableInventory from './TableInventory'

const Inventory = () => {
  return (
    <section className="h-[88vh] overflow-y-scroll p-10 w-full">
      <div>
          <TableInventory/>
      </div>
    </section>
  );
};

export default Inventory;
