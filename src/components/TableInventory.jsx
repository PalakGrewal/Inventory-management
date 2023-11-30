import React, { useState } from 'react';
import Modal from '../components/AddOrderModal';
import { ListFilter} from 'lucide-react';
import { Pencil } from 'lucide-react';

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dummyEntries, setDummyEntries] = useState([
    { id: 1, item_img: 'https://unsplash.com/photos/pair-of-white-and-orange-athletic-shoes-on-white-box-dwKiHoqqxk8', item_name: 'Sneakers', pur_price: '$100', sell_price: '$150' , Onhand_units: '50', sold_units: '100', total_units: '150', dt_updated: '25-11-2023' },
    { id: 2, item_img: 'https://unsplash.com/photos/space-gray-apple-watch-with-black-sports-band-hbTKIbuMmBI', item_name: 'Smart Watch', pur_price: '$200', sell_price: '$250' , Onhand_units: '80', sold_units: '110', total_units: '190', dt_updated: '25-11-2023' },
    { id: 4, item_img: 'https://unsplash.com/photos/modern-laptop-computer-on-wooden-table-T4u6X6xq2xk', item_name: 'Laptop', pur_price: '$1200', sell_price: '$1500', Onhand_units: '25', sold_units: '50', total_units: '75', dt_updated: '25-11-2023', },
    {
      id: 5,
      item_img: 'https://unsplash.com/photos/black-and-gray-dslr-camera-631748',
      item_name: 'DSLR Camera',
      pur_price: '$800',
      sell_price: '$1000',
      Onhand_units: '15',
      sold_units: '30',
      total_units: '45',
      dt_updated: '25-11-2023',
    },

    {
      id: 6,
      item_img: 'https://unsplash.com/photos/modern-kitchen-with-stainless-steel-appliances-PUqOpyvH3FQ',
      item_name: 'Refrigerator',
      pur_price: '$800',
      sell_price: '$1000',
      Onhand_units: '40',
      sold_units: '60',
      total_units: '100',
      dt_updated: '25-11-2023',
    },
    
    {
      id: 7,
      item_img: 'https://unsplash.com/photos/front-load-washing-machine-UBQ09czVc3A',
      item_name: 'Washing Machine',
      pur_price: '$600',
      sell_price: '$750',
      Onhand_units: '20',
      sold_units: '30',
      total_units: '50',
      dt_updated: '25-11-2023',
    },

    {
      id: 8,
      item_img: 'https://unsplash.com/photos/folded-clothes-on-shelves-5ygUGpONucc',
      item_name: 'T-Shirt',
      pur_price: '$20',
      sell_price: '$30',
      Onhand_units: '100',
      sold_units: '150',
      total_units: '250',
      dt_updated: '25-11-2023',
    },
    
    {
      id: 9,
      item_img: 'https://unsplash.com/photos/clothes-on-rack-inside-room-UE1Lzcxo77o',
      item_name: 'Jeans',
      pur_price: '$40',
      sell_price: '$50',
      Onhand_units: '80',
      sold_units: '120',
      total_units: '200',
      dt_updated: '25-11-2023',
    }
  ])

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
    setSearchTerm('');
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEntries = dummyEntries.filter((entry) => {
    const matchSearchTerm =
      entry.item_img.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.item_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.pur_price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.sell_price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.Onhand_units.toLowerCase().includes(searchTerm.toLowerCase())||
      entry.sold_units.toLowerCase().includes(searchTerm.toLowerCase())||
      entry.total_units.toLowerCase().includes(searchTerm.toLowerCase())||
      entry.dt_updated.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedOption === 'all') {
      return matchSearchTerm;
    } else if (selectedOption === 'approved') {
      return entry.status === 'Approved' && matchSearchTerm;
    } else if (selectedOption === 'pending') {
      return entry.payment === 'Pending' && matchSearchTerm;
    }
    return matchSearchTerm;
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between pb-4">
        <div>
          <h1 className="text-xl font-bold">Inventory</h1>
          <select
            className="mt-2 p-2 border border-gray-300 rounded"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="all">All items</option>
            <option value="approved">Clothing</option>
            <option value="pending">Home and Living</option>
          </select>
          <button className='ml-8 w-4 h-4'><Pencil className="inline mr-2 w-4 h-4"/>Edit</button>
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
        <p className='text-red-500'>No matching orders found for "{searchTerm}".</p>
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
              <td className="px-6 py-3 border-b border-gray-300">{entry.item_img}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.item_name}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.pur_price}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.sell_price}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.Onhand_units}</td>
              <td className="px-6 py-3 border-b border-gray-300 text-center">{entry.sold_units}</td> {/* Center alignment for the Amount column */}
              <td className="px-6 py-3 border-b border-gray-300">{entry.total_units}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.dt_updated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding new product */}
      {isModalOpen && <Modal closeModal={closeModal} addProductToTable={handleAddProductToTable} />}
    </div>
  );
};

export default Orders;
